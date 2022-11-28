import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalysisCompleted } from "./analysiscompleted";
import { Status } from "./status";
import { Operation } from "./operation";


export enum DiscoveredAnalysisStatusEnum {
    AnalysisStatusUnspecified = "ANALYSIS_STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Scanning = "SCANNING",
    Complete = "COMPLETE",
    FinishedSuccess = "FINISHED_SUCCESS",
    FinishedFailed = "FINISHED_FAILED",
    FinishedUnsupported = "FINISHED_UNSUPPORTED"
}

export enum DiscoveredContinuousAnalysisEnum {
    ContinuousAnalysisUnspecified = "CONTINUOUS_ANALYSIS_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}


// Discovered
/** 
 * Provides information about the scan status of a discovered resource.
**/
export class Discovered extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisCompleted" })
  analysisCompleted?: AnalysisCompleted;

  @SpeakeasyMetadata({ data: "json, name=analysisError", elemType: Status })
  analysisError?: Status[];

  @SpeakeasyMetadata({ data: "json, name=analysisStatus" })
  analysisStatus?: DiscoveredAnalysisStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=analysisStatusError" })
  analysisStatusError?: Status;

  @SpeakeasyMetadata({ data: "json, name=archiveTime" })
  archiveTime?: string;

  @SpeakeasyMetadata({ data: "json, name=continuousAnalysis" })
  continuousAnalysis?: DiscoveredContinuousAnalysisEnum;

  @SpeakeasyMetadata({ data: "json, name=cpe" })
  cpe?: string;

  @SpeakeasyMetadata({ data: "json, name=lastScanTime" })
  lastScanTime?: string;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: Operation;
}
