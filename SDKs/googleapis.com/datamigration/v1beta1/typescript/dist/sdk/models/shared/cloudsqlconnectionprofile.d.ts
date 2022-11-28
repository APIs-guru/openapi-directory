import { SpeakeasyBase } from "../../../internal/utils";
import { CloudSqlSettingsInput } from "./cloudsqlsettings";
import { CloudSqlSettings } from "./cloudsqlsettings";
/**
 * Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
**/
export declare class CloudSqlConnectionProfileInput extends SpeakeasyBase {
    settings?: CloudSqlSettingsInput;
}
/**
 * Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
**/
export declare class CloudSqlConnectionProfile extends SpeakeasyBase {
    cloudSqlId?: string;
    privateIp?: string;
    publicIp?: string;
    settings?: CloudSqlSettings;
}
