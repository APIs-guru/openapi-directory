import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2Error } from "./googleprivacydlpv2error";
import { GooglePrivacyDlpV2InspectDataSourceDetails } from "./googleprivacydlpv2inspectdatasourcedetails";
import { GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails } from "./googleprivacydlpv2analyzedatasourceriskdetails";

export enum GooglePrivacyDlpV2DlpJobStateEnum {
    JobStateUnspecified = "JOB_STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Running = "RUNNING"
,    Done = "DONE"
,    Canceled = "CANCELED"
,    Failed = "FAILED"
,    Active = "ACTIVE"
}

export enum GooglePrivacyDlpV2DlpJobTypeEnum {
    DlpJobTypeUnspecified = "DLP_JOB_TYPE_UNSPECIFIED"
,    InspectJob = "INSPECT_JOB"
,    RiskAnalysisJob = "RISK_ANALYSIS_JOB"
}


// GooglePrivacyDlpV2DlpJob
/** 
 * Combines all of the information about a DLP job.
**/
export class GooglePrivacyDlpV2DlpJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.GooglePrivacyDlpV2Error })
  errors?: GooglePrivacyDlpV2Error[];

  @Metadata({ data: "json, name=inspectDetails" })
  inspectDetails?: GooglePrivacyDlpV2InspectDataSourceDetails;

  @Metadata({ data: "json, name=jobTriggerName" })
  jobTriggerName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=riskDetails" })
  riskDetails?: GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: GooglePrivacyDlpV2DlpJobStateEnum;

  @Metadata({ data: "json, name=type" })
  type?: GooglePrivacyDlpV2DlpJobTypeEnum;
}
