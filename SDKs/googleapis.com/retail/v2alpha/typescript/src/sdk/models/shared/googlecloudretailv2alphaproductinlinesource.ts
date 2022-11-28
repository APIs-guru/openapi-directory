import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaProductInput } from "./googlecloudretailv2alphaproduct";



// GoogleCloudRetailV2alphaProductInlineSourceInput
/** 
 * The inline source for the input config for ImportProducts method.
**/
export class GoogleCloudRetailV2alphaProductInlineSourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=products", elemType: GoogleCloudRetailV2alphaProductInput })
  products?: GoogleCloudRetailV2alphaProductInput[];
}
