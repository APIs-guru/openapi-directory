import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2alphaRuleTwowaySynonymsAction
/** 
 * Creates a set of terms that will be treated as synonyms of each other. Example: synonyms of "sneakers" and "shoes". * "sneakers" will use a synonym of "shoes". * "shoes" will use a synonym of "sneakers".
**/
export class GoogleCloudRetailV2alphaRuleTwowaySynonymsAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=synonyms" })
  synonyms?: string[];
}
