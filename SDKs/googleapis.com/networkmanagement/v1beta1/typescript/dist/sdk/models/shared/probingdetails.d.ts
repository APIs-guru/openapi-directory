import { SpeakeasyBase } from "../../../internal/utils";
import { EdgeLocation } from "./edgelocation";
import { EndpointInfo } from "./endpointinfo";
import { Status } from "./status";
import { LatencyDistribution } from "./latencydistribution";
export declare enum ProbingDetailsAbortCauseEnum {
    ProbingAbortCauseUnspecified = "PROBING_ABORT_CAUSE_UNSPECIFIED",
    PermissionDenied = "PERMISSION_DENIED",
    NoSourceLocation = "NO_SOURCE_LOCATION"
}
export declare enum ProbingDetailsResultEnum {
    ProbingResultUnspecified = "PROBING_RESULT_UNSPECIFIED",
    Reachable = "REACHABLE",
    Unreachable = "UNREACHABLE",
    ReachabilityInconsistent = "REACHABILITY_INCONSISTENT",
    Undetermined = "UNDETERMINED"
}
/**
 * Results of active probing from the last run of the test.
**/
export declare class ProbingDetails extends SpeakeasyBase {
    abortCause?: ProbingDetailsAbortCauseEnum;
    destinationEgressLocation?: EdgeLocation;
    endpointInfo?: EndpointInfo;
    error?: Status;
    probingLatency?: LatencyDistribution;
    result?: ProbingDetailsResultEnum;
    sentProbeCount?: number;
    successfulProbeCount?: number;
    verifyTime?: string;
}
