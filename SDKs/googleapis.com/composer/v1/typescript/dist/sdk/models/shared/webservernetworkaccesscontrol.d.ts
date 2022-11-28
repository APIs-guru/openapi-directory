import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedIpRange } from "./allowediprange";
/**
 * Network-level access control policy for the Airflow web server.
**/
export declare class WebServerNetworkAccessControl extends SpeakeasyBase {
    allowedIpRanges?: AllowedIpRange[];
}
