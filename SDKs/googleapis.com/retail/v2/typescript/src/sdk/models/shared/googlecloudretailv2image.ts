import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2Image
/** 
 * Product image. Recommendations AI and Retail Search do not use product images to improve prediction and search results. However, product images can be returned in results, and are shown in prediction or search previews in the console.
**/
export class GoogleCloudRetailV2Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
