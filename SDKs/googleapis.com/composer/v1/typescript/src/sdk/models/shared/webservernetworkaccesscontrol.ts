import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllowedIpRange } from "./allowediprange";



// WebServerNetworkAccessControl
/** 
 * Network-level access control policy for the Airflow web server.
**/
export class WebServerNetworkAccessControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedIpRanges", elemType: AllowedIpRange })
  allowedIpRanges?: AllowedIpRange[];
}
