import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RepricingRuleReport } from "./repricingrulereport";


// ListRepricingRuleReportsResponse
/** 
 * Response message for the ListRepricingRuleReports method.
**/
export class ListRepricingRuleReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=repricingRuleReports", elemType: shared.RepricingRuleReport })
  repricingRuleReports?: RepricingRuleReport[];
}
