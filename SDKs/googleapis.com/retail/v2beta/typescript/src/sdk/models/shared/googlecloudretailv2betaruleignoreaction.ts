import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaRuleIgnoreAction
/** 
 * Prevents a term in the query from being used in search. Example: Don't search for "shoddy".
**/
export class GoogleCloudRetailV2betaRuleIgnoreAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ignoreTerms" })
  ignoreTerms?: string[];
}
