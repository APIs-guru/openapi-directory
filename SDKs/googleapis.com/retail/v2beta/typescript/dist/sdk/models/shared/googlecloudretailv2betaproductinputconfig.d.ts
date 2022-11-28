import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaBigQuerySource } from "./googlecloudretailv2betabigquerysource";
import { GoogleCloudRetailV2betaGcsSource } from "./googlecloudretailv2betagcssource";
import { GoogleCloudRetailV2betaProductInlineSourceInput } from "./googlecloudretailv2betaproductinlinesource";
/**
 * The input config source for products.
**/
export declare class GoogleCloudRetailV2betaProductInputConfigInput extends SpeakeasyBase {
    bigQuerySource?: GoogleCloudRetailV2betaBigQuerySource;
    gcsSource?: GoogleCloudRetailV2betaGcsSource;
    productInlineSource?: GoogleCloudRetailV2betaProductInlineSourceInput;
}
