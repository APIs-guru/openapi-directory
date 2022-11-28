import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Replaces a term in the query. Multiple replacement candidates can be specified. All `query_terms` will be replaced with the replacement term. Example: Replace "gShoe" with "google shoe".
**/
export declare class GoogleCloudRetailV2alphaRuleReplacementAction extends SpeakeasyBase {
    queryTerms?: string[];
    replacementTerm?: string;
    term?: string;
}
