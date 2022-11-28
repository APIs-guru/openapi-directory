import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalysisCompleted } from "./analysiscompleted";
import { Status } from "./status";


export enum DiscoveryOccurrenceAnalysisStatusEnum {
    AnalysisStatusUnspecified = "ANALYSIS_STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Scanning = "SCANNING",
    FinishedSuccess = "FINISHED_SUCCESS",
    Complete = "COMPLETE",
    FinishedFailed = "FINISHED_FAILED",
    FinishedUnsupported = "FINISHED_UNSUPPORTED"
}

export enum DiscoveryOccurrenceContinuousAnalysisEnum {
    ContinuousAnalysisUnspecified = "CONTINUOUS_ANALYSIS_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}


// DiscoveryOccurrence
/** 
 * Provides information about the analysis status of a discovered resource.
**/
export class DiscoveryOccurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisCompleted" })
  analysisCompleted?: AnalysisCompleted;

  @SpeakeasyMetadata({ data: "json, name=analysisError", elemType: Status })
  analysisError?: Status[];

  @SpeakeasyMetadata({ data: "json, name=analysisStatus" })
  analysisStatus?: DiscoveryOccurrenceAnalysisStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=analysisStatusError" })
  analysisStatusError?: Status;

  @SpeakeasyMetadata({ data: "json, name=archiveTime" })
  archiveTime?: string;

  @SpeakeasyMetadata({ data: "json, name=continuousAnalysis" })
  continuousAnalysis?: DiscoveryOccurrenceContinuousAnalysisEnum;

  @SpeakeasyMetadata({ data: "json, name=cpe" })
  cpe?: string;

  @SpeakeasyMetadata({ data: "json, name=lastScanTime" })
  lastScanTime?: string;
}
