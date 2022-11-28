import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for an outcome with a FAILURE outcome summary.
**/
export declare class FailureDetail extends SpeakeasyBase {
    crashed?: boolean;
    deviceOutOfMemory?: boolean;
    failedRoboscript?: boolean;
    notInstalled?: boolean;
    otherNativeCrash?: boolean;
    timedOut?: boolean;
    unableToCrawl?: boolean;
}
