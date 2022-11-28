import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2RuleReplacementAction
/** 
 * Replaces a term in the query. Multiple replacement candidates can be specified. All `query_terms` will be replaced with the replacement term. Example: Replace "gShoe" with "google shoe".
**/
export class GoogleCloudRetailV2RuleReplacementAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queryTerms" })
  queryTerms?: string[];

  @SpeakeasyMetadata({ data: "json, name=replacementTerm" })
  replacementTerm?: string;

  @SpeakeasyMetadata({ data: "json, name=term" })
  term?: string;
}
