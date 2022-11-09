import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaColorInfo
/** 
 * The color information of a Product.
**/
export class GoogleCloudRetailV2betaColorInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=colorFamilies" })
  colorFamilies?: string[];

  @Metadata({ data: "json, name=colors" })
  colors?: string[];
}
