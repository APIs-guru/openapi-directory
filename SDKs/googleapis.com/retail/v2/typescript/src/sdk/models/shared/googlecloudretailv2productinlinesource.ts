import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2ProductInput } from "./googlecloudretailv2product";



// GoogleCloudRetailV2ProductInlineSourceInput
/** 
 * The inline source for the input config for ImportProducts method.
**/
export class GoogleCloudRetailV2ProductInlineSourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=products", elemType: GoogleCloudRetailV2ProductInput })
  products?: GoogleCloudRetailV2ProductInput[];
}
