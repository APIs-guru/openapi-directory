import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2betaBigQuerySource } from "./googlecloudretailv2betabigquerysource";
import { GoogleCloudRetailV2betaGcsSource } from "./googlecloudretailv2betagcssource";
import { GoogleCloudRetailV2betaProductInlineSource } from "./googlecloudretailv2betaproductinlinesource";


// GoogleCloudRetailV2betaProductInputConfig
/** 
 * The input config source for products.
**/
export class GoogleCloudRetailV2betaProductInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigQuerySource" })
  bigQuerySource?: GoogleCloudRetailV2betaBigQuerySource;

  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudRetailV2betaGcsSource;

  @Metadata({ data: "json, name=productInlineSource" })
  productInlineSource?: GoogleCloudRetailV2betaProductInlineSource;
}
