import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2TransformationSummary } from "./googleprivacydlpv2transformationsummary";



// GooglePrivacyDlpV2TransformationOverview
/** 
 * Overview of the modifications that occurred.
**/
export class GooglePrivacyDlpV2TransformationOverview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transformationSummaries", elemType: GooglePrivacyDlpV2TransformationSummary })
  transformationSummaries?: GooglePrivacyDlpV2TransformationSummary[];

  @SpeakeasyMetadata({ data: "json, name=transformedBytes" })
  transformedBytes?: string;
}
