import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnalysisCompleted } from "./analysiscompleted";
import { Status } from "./status";
import { Status } from "./status";

export enum DiscoveryOccurrenceAnalysisStatusEnum {
    AnalysisStatusUnspecified = "ANALYSIS_STATUS_UNSPECIFIED"
,    Pending = "PENDING"
,    Scanning = "SCANNING"
,    FinishedSuccess = "FINISHED_SUCCESS"
,    Complete = "COMPLETE"
,    FinishedFailed = "FINISHED_FAILED"
,    FinishedUnsupported = "FINISHED_UNSUPPORTED"
}

export enum DiscoveryOccurrenceContinuousAnalysisEnum {
    ContinuousAnalysisUnspecified = "CONTINUOUS_ANALYSIS_UNSPECIFIED"
,    Active = "ACTIVE"
,    Inactive = "INACTIVE"
}


// DiscoveryOccurrence
/** 
 * Provides information about the analysis status of a discovered resource.
**/
export class DiscoveryOccurrence extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisCompleted" })
  analysisCompleted?: AnalysisCompleted;

  @Metadata({ data: "json, name=analysisError", elemType: shared.Status })
  analysisError?: Status[];

  @Metadata({ data: "json, name=analysisStatus" })
  analysisStatus?: DiscoveryOccurrenceAnalysisStatusEnum;

  @Metadata({ data: "json, name=analysisStatusError" })
  analysisStatusError?: Status;

  @Metadata({ data: "json, name=archiveTime" })
  archiveTime?: string;

  @Metadata({ data: "json, name=continuousAnalysis" })
  continuousAnalysis?: DiscoveryOccurrenceContinuousAnalysisEnum;

  @Metadata({ data: "json, name=cpe" })
  cpe?: string;

  @Metadata({ data: "json, name=lastScanTime" })
  lastScanTime?: string;
}
