import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIdentitytoolkitAdminV2RequestLogging
/** 
 * Configuration for logging requests made to this project to Stackdriver Logging
**/
export class GoogleCloudIdentitytoolkitAdminV2RequestLogging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
