import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2ColorInfo
/** 
 * The color information of a Product.
**/
export class GoogleCloudRetailV2ColorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colorFamilies" })
  colorFamilies?: string[];

  @SpeakeasyMetadata({ data: "json, name=colors" })
  colors?: string[];
}
