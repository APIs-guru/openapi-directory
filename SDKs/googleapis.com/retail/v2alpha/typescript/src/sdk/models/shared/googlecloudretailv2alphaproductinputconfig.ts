import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaBigQuerySource } from "./googlecloudretailv2alphabigquerysource";
import { GoogleCloudRetailV2alphaGcsSource } from "./googlecloudretailv2alphagcssource";
import { GoogleCloudRetailV2alphaProductInlineSource } from "./googlecloudretailv2alphaproductinlinesource";


// GoogleCloudRetailV2alphaProductInputConfig
/** 
 * The input config source for products.
**/
export class GoogleCloudRetailV2alphaProductInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigQuerySource" })
  bigQuerySource?: GoogleCloudRetailV2alphaBigQuerySource;

  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudRetailV2alphaGcsSource;

  @Metadata({ data: "json, name=productInlineSource" })
  productInlineSource?: GoogleCloudRetailV2alphaProductInlineSource;
}
