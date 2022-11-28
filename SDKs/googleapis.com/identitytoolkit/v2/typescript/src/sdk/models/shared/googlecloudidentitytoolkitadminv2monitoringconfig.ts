import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitAdminV2RequestLogging } from "./googlecloudidentitytoolkitadminv2requestlogging";



// GoogleCloudIdentitytoolkitAdminV2MonitoringConfig
/** 
 * Configuration related to monitoring project activity.
**/
export class GoogleCloudIdentitytoolkitAdminV2MonitoringConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestLogging" })
  requestLogging?: GoogleCloudIdentitytoolkitAdminV2RequestLogging;
}
