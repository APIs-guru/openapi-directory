import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaBigQuerySource } from "./googlecloudretailv2alphabigquerysource";
import { GoogleCloudRetailV2alphaGcsSource } from "./googlecloudretailv2alphagcssource";
import { GoogleCloudRetailV2alphaProductInlineSourceInput } from "./googlecloudretailv2alphaproductinlinesource";



// GoogleCloudRetailV2alphaProductInputConfigInput
/** 
 * The input config source for products.
**/
export class GoogleCloudRetailV2alphaProductInputConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigQuerySource" })
  bigQuerySource?: GoogleCloudRetailV2alphaBigQuerySource;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudRetailV2alphaGcsSource;

  @SpeakeasyMetadata({ data: "json, name=productInlineSource" })
  productInlineSource?: GoogleCloudRetailV2alphaProductInlineSourceInput;
}
