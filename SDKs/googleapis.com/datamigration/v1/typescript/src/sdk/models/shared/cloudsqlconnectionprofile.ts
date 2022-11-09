import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudSqlSettings } from "./cloudsqlsettings";


// CloudSqlConnectionProfile
/** 
 * Specifies required connection parameters, and, optionally, the parameters required to create a Cloud SQL destination database instance.
**/
export class CloudSqlConnectionProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudSqlId" })
  cloudSqlId?: string;

  @Metadata({ data: "json, name=privateIp" })
  privateIp?: string;

  @Metadata({ data: "json, name=publicIp" })
  publicIp?: string;

  @Metadata({ data: "json, name=settings" })
  settings?: CloudSqlSettings;
}
