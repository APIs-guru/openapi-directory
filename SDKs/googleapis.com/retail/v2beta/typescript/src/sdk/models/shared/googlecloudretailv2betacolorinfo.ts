import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaColorInfo
/** 
 * The color information of a Product.
**/
export class GoogleCloudRetailV2betaColorInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colorFamilies" })
  colorFamilies?: string[];

  @SpeakeasyMetadata({ data: "json, name=colors" })
  colors?: string[];
}
