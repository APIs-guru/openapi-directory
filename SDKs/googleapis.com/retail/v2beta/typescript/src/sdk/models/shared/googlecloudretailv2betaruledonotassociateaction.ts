import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaRuleDoNotAssociateAction
/** 
 * Prevents `query_term` from being associated with specified terms during search. Example: Don't associate "gShoe" and "cheap".
**/
export class GoogleCloudRetailV2betaRuleDoNotAssociateAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doNotAssociateTerms" })
  doNotAssociateTerms?: string[];

  @SpeakeasyMetadata({ data: "json, name=queryTerms" })
  queryTerms?: string[];

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: string[];
}
