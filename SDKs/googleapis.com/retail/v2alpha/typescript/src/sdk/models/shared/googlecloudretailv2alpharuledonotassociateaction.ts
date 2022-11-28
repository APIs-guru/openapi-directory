import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaRuleDoNotAssociateAction
/** 
 * Prevents `query_term` from being associated with specified terms during search. Example: Don't associate "gShoe" and "cheap".
**/
export class GoogleCloudRetailV2alphaRuleDoNotAssociateAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doNotAssociateTerms" })
  doNotAssociateTerms?: string[];

  @SpeakeasyMetadata({ data: "json, name=queryTerms" })
  queryTerms?: string[];

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: string[];
}
