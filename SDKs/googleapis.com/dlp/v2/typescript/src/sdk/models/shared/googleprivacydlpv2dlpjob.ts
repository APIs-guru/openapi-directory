import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Error } from "./googleprivacydlpv2error";
import { GooglePrivacyDlpV2InspectDataSourceDetails } from "./googleprivacydlpv2inspectdatasourcedetails";
import { GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails } from "./googleprivacydlpv2analyzedatasourceriskdetails";


export enum GooglePrivacyDlpV2DlpJobStateEnum {
    JobStateUnspecified = "JOB_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Done = "DONE",
    Canceled = "CANCELED",
    Failed = "FAILED",
    Active = "ACTIVE"
}

export enum GooglePrivacyDlpV2DlpJobTypeEnum {
    DlpJobTypeUnspecified = "DLP_JOB_TYPE_UNSPECIFIED",
    InspectJob = "INSPECT_JOB",
    RiskAnalysisJob = "RISK_ANALYSIS_JOB"
}


// GooglePrivacyDlpV2DlpJob
/** 
 * Combines all of the information about a DLP job.
**/
export class GooglePrivacyDlpV2DlpJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GooglePrivacyDlpV2Error })
  errors?: GooglePrivacyDlpV2Error[];

  @SpeakeasyMetadata({ data: "json, name=inspectDetails" })
  inspectDetails?: GooglePrivacyDlpV2InspectDataSourceDetails;

  @SpeakeasyMetadata({ data: "json, name=jobTriggerName" })
  jobTriggerName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=riskDetails" })
  riskDetails?: GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GooglePrivacyDlpV2DlpJobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GooglePrivacyDlpV2DlpJobTypeEnum;
}
