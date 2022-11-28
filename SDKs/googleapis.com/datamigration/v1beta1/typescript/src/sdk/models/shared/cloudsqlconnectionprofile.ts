import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudSqlSettingsInput } from "./cloudsqlsettings";
import { CloudSqlSettings } from "./cloudsqlsettings";



// CloudSqlConnectionProfileInput
/** 
 * Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
**/
export class CloudSqlConnectionProfileInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: CloudSqlSettingsInput;
}


// CloudSqlConnectionProfile
/** 
 * Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
**/
export class CloudSqlConnectionProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudSqlId" })
  cloudSqlId?: string;

  @SpeakeasyMetadata({ data: "json, name=privateIp" })
  privateIp?: string;

  @SpeakeasyMetadata({ data: "json, name=publicIp" })
  publicIp?: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: CloudSqlSettings;
}
