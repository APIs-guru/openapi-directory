import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2RuleIgnoreAction
/** 
 * Prevents a term in the query from being used in search. Example: Don't search for "shoddy".
**/
export class GoogleCloudRetailV2RuleIgnoreAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ignoreTerms" })
  ignoreTerms?: string[];
}
