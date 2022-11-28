import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaColorInfo
/** 
 * The color information of a Product.
**/
export class GoogleCloudRetailV2alphaColorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colorFamilies" })
  colorFamilies?: string[];

  @SpeakeasyMetadata({ data: "json, name=colors" })
  colors?: string[];
}
