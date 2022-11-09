import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2alphaRuleOnewaySynonymsAction
/** 
 * Maps a set of terms to a set of synonyms. Set of synonyms will be treated as synonyms of each query term only. `query_terms` will not be treated as synonyms of each other. Example: "sneakers" will use a synonym of "shoes". "shoes" will not use a synonym of "sneakers".
**/
export class GoogleCloudRetailV2alphaRuleOnewaySynonymsAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=onewayTerms" })
  onewayTerms?: string[];

  @Metadata({ data: "json, name=queryTerms" })
  queryTerms?: string[];

  @Metadata({ data: "json, name=synonyms" })
  synonyms?: string[];
}
