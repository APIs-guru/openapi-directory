import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Maps a set of terms to a set of synonyms. Set of synonyms will be treated as synonyms of each query term only. `query_terms` will not be treated as synonyms of each other. Example: "sneakers" will use a synonym of "shoes". "shoes" will not use a synonym of "sneakers".
**/
export declare class GoogleCloudRetailV2alphaRuleOnewaySynonymsAction extends SpeakeasyBase {
    onewayTerms?: string[];
    queryTerms?: string[];
    synonyms?: string[];
}
