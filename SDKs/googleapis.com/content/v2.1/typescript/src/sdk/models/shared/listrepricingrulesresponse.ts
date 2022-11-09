import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RepricingRule } from "./repricingrule";


// ListRepricingRulesResponse
/** 
 * Response message for the `ListRepricingRules` method.
**/
export class ListRepricingRulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=repricingRules", elemType: shared.RepricingRule })
  repricingRules?: RepricingRule[];
}
