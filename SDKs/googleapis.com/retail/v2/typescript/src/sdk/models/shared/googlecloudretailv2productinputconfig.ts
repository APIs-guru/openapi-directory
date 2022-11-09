import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2BigQuerySource } from "./googlecloudretailv2bigquerysource";
import { GoogleCloudRetailV2GcsSource } from "./googlecloudretailv2gcssource";
import { GoogleCloudRetailV2ProductInlineSource } from "./googlecloudretailv2productinlinesource";


// GoogleCloudRetailV2ProductInputConfig
/** 
 * The input config source for products.
**/
export class GoogleCloudRetailV2ProductInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigQuerySource" })
  bigQuerySource?: GoogleCloudRetailV2BigQuerySource;

  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudRetailV2GcsSource;

  @Metadata({ data: "json, name=productInlineSource" })
  productInlineSource?: GoogleCloudRetailV2ProductInlineSource;
}
