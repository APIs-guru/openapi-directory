import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaProduct } from "./googlecloudretailv2betaproduct";


// GoogleCloudRetailV2betaProductInlineSource
/** 
 * The inline source for the input config for ImportProducts method.
**/
export class GoogleCloudRetailV2betaProductInlineSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=products", elemType: shared.GoogleCloudRetailV2betaProduct })
  products?: GoogleCloudRetailV2betaProduct[];
}
