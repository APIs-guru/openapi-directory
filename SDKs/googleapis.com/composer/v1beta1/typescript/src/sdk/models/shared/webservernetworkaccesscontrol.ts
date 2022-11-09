import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AllowedIpRange } from "./allowediprange";


// WebServerNetworkAccessControl
/** 
 * Network-level access control policy for the Airflow web server.
**/
export class WebServerNetworkAccessControl extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedIpRanges", elemType: shared.AllowedIpRange })
  allowedIpRanges?: AllowedIpRange[];
}
