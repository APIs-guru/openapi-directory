import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2RuleIgnoreAction
/** 
 * Prevents a term in the query from being used in search. Example: Don't search for "shoddy".
**/
export class GoogleCloudRetailV2RuleIgnoreAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=ignoreTerms" })
  ignoreTerms?: string[];
}
