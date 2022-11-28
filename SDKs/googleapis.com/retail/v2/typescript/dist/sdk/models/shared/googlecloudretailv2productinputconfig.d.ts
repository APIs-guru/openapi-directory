import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2BigQuerySource } from "./googlecloudretailv2bigquerysource";
import { GoogleCloudRetailV2GcsSource } from "./googlecloudretailv2gcssource";
import { GoogleCloudRetailV2ProductInlineSourceInput } from "./googlecloudretailv2productinlinesource";
/**
 * The input config source for products.
**/
export declare class GoogleCloudRetailV2ProductInputConfigInput extends SpeakeasyBase {
    bigQuerySource?: GoogleCloudRetailV2BigQuerySource;
    gcsSource?: GoogleCloudRetailV2GcsSource;
    productInlineSource?: GoogleCloudRetailV2ProductInlineSourceInput;
}
