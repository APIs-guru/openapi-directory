import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaBigQuerySource } from "./googlecloudretailv2alphabigquerysource";
import { GoogleCloudRetailV2alphaGcsSource } from "./googlecloudretailv2alphagcssource";
import { GoogleCloudRetailV2alphaProductInlineSourceInput } from "./googlecloudretailv2alphaproductinlinesource";
/**
 * The input config source for products.
**/
export declare class GoogleCloudRetailV2alphaProductInputConfigInput extends SpeakeasyBase {
    bigQuerySource?: GoogleCloudRetailV2alphaBigQuerySource;
    gcsSource?: GoogleCloudRetailV2alphaGcsSource;
    productInlineSource?: GoogleCloudRetailV2alphaProductInlineSourceInput;
}
