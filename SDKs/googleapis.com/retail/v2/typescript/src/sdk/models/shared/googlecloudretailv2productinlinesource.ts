import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2Product } from "./googlecloudretailv2product";


// GoogleCloudRetailV2ProductInlineSource
/** 
 * The inline source for the input config for ImportProducts method.
**/
export class GoogleCloudRetailV2ProductInlineSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=products", elemType: shared.GoogleCloudRetailV2Product })
  products?: GoogleCloudRetailV2Product[];
}
