import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EdgeLocation } from "./edgelocation";
import { EndpointInfo } from "./endpointinfo";
import { Status } from "./status";
import { LatencyDistribution } from "./latencydistribution";

export enum ProbingDetailsAbortCauseEnum {
    ProbingAbortCauseUnspecified = "PROBING_ABORT_CAUSE_UNSPECIFIED"
,    PermissionDenied = "PERMISSION_DENIED"
,    NoSourceLocation = "NO_SOURCE_LOCATION"
}

export enum ProbingDetailsResultEnum {
    ProbingResultUnspecified = "PROBING_RESULT_UNSPECIFIED"
,    Reachable = "REACHABLE"
,    Unreachable = "UNREACHABLE"
,    ReachabilityInconsistent = "REACHABILITY_INCONSISTENT"
,    Undetermined = "UNDETERMINED"
}


// ProbingDetails
/** 
 * Results of active probing from the last run of the test.
**/
export class ProbingDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=abortCause" })
  abortCause?: ProbingDetailsAbortCauseEnum;

  @Metadata({ data: "json, name=destinationEgressLocation" })
  destinationEgressLocation?: EdgeLocation;

  @Metadata({ data: "json, name=endpointInfo" })
  endpointInfo?: EndpointInfo;

  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=probingLatency" })
  probingLatency?: LatencyDistribution;

  @Metadata({ data: "json, name=result" })
  result?: ProbingDetailsResultEnum;

  @Metadata({ data: "json, name=sentProbeCount" })
  sentProbeCount?: number;

  @Metadata({ data: "json, name=successfulProbeCount" })
  successfulProbeCount?: number;

  @Metadata({ data: "json, name=verifyTime" })
  verifyTime?: string;
}
