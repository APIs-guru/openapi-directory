import { SpeakeasyBase } from "../../../internal/utils";
import { CloudSqlSettings } from "./cloudsqlsettings";
import { CloudSqlSettingsInput } from "./cloudsqlsettings";
/**
 * Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
**/
export declare class CloudSqlConnectionProfile extends SpeakeasyBase {
    additionalPublicIp?: string;
    cloudSqlId?: string;
    privateIp?: string;
    publicIp?: string;
    settings?: CloudSqlSettings;
}
/**
 * Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
**/
export declare class CloudSqlConnectionProfileInput extends SpeakeasyBase {
    settings?: CloudSqlSettingsInput;
}
