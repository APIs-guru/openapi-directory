import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2BigQuerySource } from "./googlecloudretailv2bigquerysource";
import { GoogleCloudRetailV2GcsSource } from "./googlecloudretailv2gcssource";
import { GoogleCloudRetailV2ProductInlineSourceInput } from "./googlecloudretailv2productinlinesource";



// GoogleCloudRetailV2ProductInputConfigInput
/** 
 * The input config source for products.
**/
export class GoogleCloudRetailV2ProductInputConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigQuerySource" })
  bigQuerySource?: GoogleCloudRetailV2BigQuerySource;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudRetailV2GcsSource;

  @SpeakeasyMetadata({ data: "json, name=productInlineSource" })
  productInlineSource?: GoogleCloudRetailV2ProductInlineSourceInput;
}
