import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaRuleTwowaySynonymsAction
/** 
 * Creates a set of terms that will be treated as synonyms of each other. Example: synonyms of "sneakers" and "shoes": * "sneakers" will use a synonym of "shoes". * "shoes" will use a synonym of "sneakers".
**/
export class GoogleCloudRetailV2betaRuleTwowaySynonymsAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=synonyms" })
  synonyms?: string[];
}
