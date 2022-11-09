import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaProduct } from "./googlecloudretailv2alphaproduct";


// GoogleCloudRetailV2alphaProductInlineSource
/** 
 * The inline source for the input config for ImportProducts method.
**/
export class GoogleCloudRetailV2alphaProductInlineSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=products", elemType: shared.GoogleCloudRetailV2alphaProduct })
  products?: GoogleCloudRetailV2alphaProduct[];
}
