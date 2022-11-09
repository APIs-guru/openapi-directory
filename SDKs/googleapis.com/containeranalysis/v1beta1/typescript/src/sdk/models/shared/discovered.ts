import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnalysisCompleted } from "./analysiscompleted";
import { Status } from "./status";
import { Status } from "./status";

export enum DiscoveredAnalysisStatusEnum {
    AnalysisStatusUnspecified = "ANALYSIS_STATUS_UNSPECIFIED"
,    Pending = "PENDING"
,    Scanning = "SCANNING"
,    FinishedSuccess = "FINISHED_SUCCESS"
,    Complete = "COMPLETE"
,    FinishedFailed = "FINISHED_FAILED"
,    FinishedUnsupported = "FINISHED_UNSUPPORTED"
}

export enum DiscoveredContinuousAnalysisEnum {
    ContinuousAnalysisUnspecified = "CONTINUOUS_ANALYSIS_UNSPECIFIED"
,    Active = "ACTIVE"
,    Inactive = "INACTIVE"
}


// Discovered
/** 
 * Provides information about the analysis status of a discovered resource.
**/
export class Discovered extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisCompleted" })
  analysisCompleted?: AnalysisCompleted;

  @Metadata({ data: "json, name=analysisError", elemType: shared.Status })
  analysisError?: Status[];

  @Metadata({ data: "json, name=analysisStatus" })
  analysisStatus?: DiscoveredAnalysisStatusEnum;

  @Metadata({ data: "json, name=analysisStatusError" })
  analysisStatusError?: Status;

  @Metadata({ data: "json, name=continuousAnalysis" })
  continuousAnalysis?: DiscoveredContinuousAnalysisEnum;

  @Metadata({ data: "json, name=lastAnalysisTime" })
  lastAnalysisTime?: string;
}
