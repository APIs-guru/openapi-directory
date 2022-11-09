import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaModelServingConfigList
/** 
 * Represents an ordered combination of valid serving configs, which can be used for `PAGE_OPTIMIZATION` recommendations.
**/
export class GoogleCloudRetailV2betaModelServingConfigList extends SpeakeasyBase {
  @Metadata({ data: "json, name=servingConfigIds" })
  servingConfigIds?: string[];
}
