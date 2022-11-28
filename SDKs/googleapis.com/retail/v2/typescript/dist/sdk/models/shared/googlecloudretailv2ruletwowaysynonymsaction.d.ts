import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Creates a set of terms that will be treated as synonyms of each other. Example: synonyms of "sneakers" and "shoes": * "sneakers" will use a synonym of "shoes". * "shoes" will use a synonym of "sneakers".
**/
export declare class GoogleCloudRetailV2RuleTwowaySynonymsAction extends SpeakeasyBase {
    synonyms?: string[];
}
