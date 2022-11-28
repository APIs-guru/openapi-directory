import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepricingRuleReport } from "./repricingrulereport";



// ListRepricingRuleReportsResponse
/** 
 * Response message for the ListRepricingRuleReports method.
**/
export class ListRepricingRuleReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=repricingRuleReports", elemType: RepricingRuleReport })
  repricingRuleReports?: RepricingRuleReport[];
}
