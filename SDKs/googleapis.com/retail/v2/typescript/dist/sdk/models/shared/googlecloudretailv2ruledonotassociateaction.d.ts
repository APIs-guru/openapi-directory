import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Prevents `query_term` from being associated with specified terms during search. Example: Don't associate "gShoe" and "cheap".
**/
export declare class GoogleCloudRetailV2RuleDoNotAssociateAction extends SpeakeasyBase {
    doNotAssociateTerms?: string[];
    queryTerms?: string[];
    terms?: string[];
}
