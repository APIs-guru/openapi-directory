import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2InspectJobConfig } from "./googleprivacydlpv2inspectjobconfig";
import { GooglePrivacyDlpV2RiskAnalysisJobConfig } from "./googleprivacydlpv2riskanalysisjobconfig";


// GooglePrivacyDlpV2CreateDlpJobRequest
/** 
 * Request message for CreateDlpJobRequest. Used to initiate long running jobs such as calculating risk metrics or inspecting Google Cloud Storage.
**/
export class GooglePrivacyDlpV2CreateDlpJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inspectJob" })
  inspectJob?: GooglePrivacyDlpV2InspectJobConfig;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=riskJob" })
  riskJob?: GooglePrivacyDlpV2RiskAnalysisJobConfig;
}
