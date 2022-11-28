import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Error } from "./googleprivacydlpv2error";
import { GooglePrivacyDlpV2InspectDataSourceDetails } from "./googleprivacydlpv2inspectdatasourcedetails";
import { GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails } from "./googleprivacydlpv2analyzedatasourceriskdetails";
export declare enum GooglePrivacyDlpV2DlpJobStateEnum {
    JobStateUnspecified = "JOB_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Done = "DONE",
    Canceled = "CANCELED",
    Failed = "FAILED",
    Active = "ACTIVE"
}
export declare enum GooglePrivacyDlpV2DlpJobTypeEnum {
    DlpJobTypeUnspecified = "DLP_JOB_TYPE_UNSPECIFIED",
    InspectJob = "INSPECT_JOB",
    RiskAnalysisJob = "RISK_ANALYSIS_JOB"
}
/**
 * Combines all of the information about a DLP job.
**/
export declare class GooglePrivacyDlpV2DlpJob extends SpeakeasyBase {
    createTime?: string;
    endTime?: string;
    errors?: GooglePrivacyDlpV2Error[];
    inspectDetails?: GooglePrivacyDlpV2InspectDataSourceDetails;
    jobTriggerName?: string;
    name?: string;
    riskDetails?: GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails;
    startTime?: string;
    state?: GooglePrivacyDlpV2DlpJobStateEnum;
    type?: GooglePrivacyDlpV2DlpJobTypeEnum;
}
