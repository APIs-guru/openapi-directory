import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaProductInput } from "./googlecloudretailv2betaproduct";



// GoogleCloudRetailV2betaProductInlineSourceInput
/** 
 * The inline source for the input config for ImportProducts method.
**/
export class GoogleCloudRetailV2betaProductInlineSourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=products", elemType: GoogleCloudRetailV2betaProductInput })
  products?: GoogleCloudRetailV2betaProductInput[];
}
