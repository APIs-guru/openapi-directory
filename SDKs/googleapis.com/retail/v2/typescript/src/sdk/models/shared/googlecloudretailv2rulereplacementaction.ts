import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2RuleReplacementAction
/** 
 * Replaces a term in the query. Multiple replacement candidates can be specified. All `query_terms` will be replaced with the replacement term. Example: Replace "gShoe" with "google shoe".
**/
export class GoogleCloudRetailV2RuleReplacementAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=queryTerms" })
  queryTerms?: string[];

  @Metadata({ data: "json, name=replacementTerm" })
  replacementTerm?: string;

  @Metadata({ data: "json, name=term" })
  term?: string;
}
