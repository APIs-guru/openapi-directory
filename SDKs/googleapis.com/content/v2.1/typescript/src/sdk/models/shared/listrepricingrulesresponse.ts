import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepricingRule } from "./repricingrule";



// ListRepricingRulesResponse
/** 
 * Response message for the `ListRepricingRules` method.
**/
export class ListRepricingRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=repricingRules", elemType: RepricingRule })
  repricingRules?: RepricingRule[];
}
