import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIdentitytoolkitAdminV2RequestLogging } from "./googlecloudidentitytoolkitadminv2requestlogging";


// GoogleCloudIdentitytoolkitAdminV2MonitoringConfig
/** 
 * Configuration related to monitoring project activity.
**/
export class GoogleCloudIdentitytoolkitAdminV2MonitoringConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestLogging" })
  requestLogging?: GoogleCloudIdentitytoolkitAdminV2RequestLogging;
}
