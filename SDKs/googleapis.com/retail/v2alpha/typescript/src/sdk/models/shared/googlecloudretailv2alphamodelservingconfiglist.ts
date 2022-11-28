import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaModelServingConfigList
/** 
 * Represents an ordered combination of valid serving configs, which can be used for `PAGE_OPTIMIZATION` recommendations.
**/
export class GoogleCloudRetailV2alphaModelServingConfigList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=servingConfigIds" })
  servingConfigIds?: string[];
}
