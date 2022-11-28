import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectJobConfig } from "./googleprivacydlpv2inspectjobconfig";
import { GooglePrivacyDlpV2RiskAnalysisJobConfig } from "./googleprivacydlpv2riskanalysisjobconfig";



// GooglePrivacyDlpV2CreateDlpJobRequest
/** 
 * Request message for CreateDlpJobRequest. Used to initiate long running jobs such as calculating risk metrics or inspecting Google Cloud Storage.
**/
export class GooglePrivacyDlpV2CreateDlpJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inspectJob" })
  inspectJob?: GooglePrivacyDlpV2InspectJobConfig;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=riskJob" })
  riskJob?: GooglePrivacyDlpV2RiskAnalysisJobConfig;
}
