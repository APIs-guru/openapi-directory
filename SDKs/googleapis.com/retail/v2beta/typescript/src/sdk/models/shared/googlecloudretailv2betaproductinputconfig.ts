import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaBigQuerySource } from "./googlecloudretailv2betabigquerysource";
import { GoogleCloudRetailV2betaGcsSource } from "./googlecloudretailv2betagcssource";
import { GoogleCloudRetailV2betaProductInlineSourceInput } from "./googlecloudretailv2betaproductinlinesource";



// GoogleCloudRetailV2betaProductInputConfigInput
/** 
 * The input config source for products.
**/
export class GoogleCloudRetailV2betaProductInputConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigQuerySource" })
  bigQuerySource?: GoogleCloudRetailV2betaBigQuerySource;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudRetailV2betaGcsSource;

  @SpeakeasyMetadata({ data: "json, name=productInlineSource" })
  productInlineSource?: GoogleCloudRetailV2betaProductInlineSourceInput;
}
