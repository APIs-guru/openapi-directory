import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaMerchantCenterLinkingConfig } from "./googlecloudretailv2alphamerchantcenterlinkingconfig";
import { GoogleCloudRetailV2alphaProductLevelConfig } from "./googlecloudretailv2alphaproductlevelconfig";
/**
 * The catalog configuration.
**/
export declare class GoogleCloudRetailV2alphaCatalog extends SpeakeasyBase {
    displayName?: string;
    merchantCenterLinkingConfig?: GoogleCloudRetailV2alphaMerchantCenterLinkingConfig;
    name?: string;
    productLevelConfig?: GoogleCloudRetailV2alphaProductLevelConfig;
}
