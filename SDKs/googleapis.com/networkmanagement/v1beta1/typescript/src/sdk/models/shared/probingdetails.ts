import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EdgeLocation } from "./edgelocation";
import { EndpointInfo } from "./endpointinfo";
import { Status } from "./status";
import { LatencyDistribution } from "./latencydistribution";


export enum ProbingDetailsAbortCauseEnum {
    ProbingAbortCauseUnspecified = "PROBING_ABORT_CAUSE_UNSPECIFIED",
    PermissionDenied = "PERMISSION_DENIED",
    NoSourceLocation = "NO_SOURCE_LOCATION"
}

export enum ProbingDetailsResultEnum {
    ProbingResultUnspecified = "PROBING_RESULT_UNSPECIFIED",
    Reachable = "REACHABLE",
    Unreachable = "UNREACHABLE",
    ReachabilityInconsistent = "REACHABILITY_INCONSISTENT",
    Undetermined = "UNDETERMINED"
}


// ProbingDetails
/** 
 * Results of active probing from the last run of the test.
**/
export class ProbingDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abortCause" })
  abortCause?: ProbingDetailsAbortCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=destinationEgressLocation" })
  destinationEgressLocation?: EdgeLocation;

  @SpeakeasyMetadata({ data: "json, name=endpointInfo" })
  endpointInfo?: EndpointInfo;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=probingLatency" })
  probingLatency?: LatencyDistribution;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: ProbingDetailsResultEnum;

  @SpeakeasyMetadata({ data: "json, name=sentProbeCount" })
  sentProbeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=successfulProbeCount" })
  successfulProbeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=verifyTime" })
  verifyTime?: string;
}
