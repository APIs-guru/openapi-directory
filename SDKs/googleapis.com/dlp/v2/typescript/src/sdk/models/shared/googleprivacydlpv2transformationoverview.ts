import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2TransformationSummary } from "./googleprivacydlpv2transformationsummary";


// GooglePrivacyDlpV2TransformationOverview
/** 
 * Overview of the modifications that occurred.
**/
export class GooglePrivacyDlpV2TransformationOverview extends SpeakeasyBase {
  @Metadata({ data: "json, name=transformationSummaries", elemType: shared.GooglePrivacyDlpV2TransformationSummary })
  transformationSummaries?: GooglePrivacyDlpV2TransformationSummary[];

  @Metadata({ data: "json, name=transformedBytes" })
  transformedBytes?: string;
}
