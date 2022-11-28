import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectJobConfig } from "./googleprivacydlpv2inspectjobconfig";
import { GooglePrivacyDlpV2RiskAnalysisJobConfig } from "./googleprivacydlpv2riskanalysisjobconfig";
/**
 * Request message for CreateDlpJobRequest. Used to initiate long running jobs such as calculating risk metrics or inspecting Google Cloud Storage.
**/
export declare class GooglePrivacyDlpV2CreateDlpJobRequest extends SpeakeasyBase {
    inspectJob?: GooglePrivacyDlpV2InspectJobConfig;
    jobId?: string;
    locationId?: string;
    riskJob?: GooglePrivacyDlpV2RiskAnalysisJobConfig;
}
