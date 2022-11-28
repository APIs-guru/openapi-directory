import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { Trace } from "./trace";
export declare enum ReachabilityDetailsResultEnum {
    ResultUnspecified = "RESULT_UNSPECIFIED",
    Reachable = "REACHABLE",
    Unreachable = "UNREACHABLE",
    Ambiguous = "AMBIGUOUS",
    Undetermined = "UNDETERMINED"
}
/**
 * Results of the configuration analysis from the last run of the test.
**/
export declare class ReachabilityDetails extends SpeakeasyBase {
    error?: Status;
    result?: ReachabilityDetailsResultEnum;
    traces?: Trace[];
    verifyTime?: string;
}
