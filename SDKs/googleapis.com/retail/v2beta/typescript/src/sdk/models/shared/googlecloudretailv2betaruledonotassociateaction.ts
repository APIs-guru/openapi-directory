import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaRuleDoNotAssociateAction
/** 
 * Prevents `query_term` from being associated with specified terms during search. Example: Don't associate "gShoe" and "cheap".
**/
export class GoogleCloudRetailV2betaRuleDoNotAssociateAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=doNotAssociateTerms" })
  doNotAssociateTerms?: string[];

  @Metadata({ data: "json, name=queryTerms" })
  queryTerms?: string[];

  @Metadata({ data: "json, name=terms" })
  terms?: string[];
}
