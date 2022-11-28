import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaMerchantCenterLinkingConfig } from "./googlecloudretailv2betamerchantcenterlinkingconfig";
import { GoogleCloudRetailV2betaProductLevelConfig } from "./googlecloudretailv2betaproductlevelconfig";
/**
 * The catalog configuration.
**/
export declare class GoogleCloudRetailV2betaCatalog extends SpeakeasyBase {
    displayName?: string;
    merchantCenterLinkingConfig?: GoogleCloudRetailV2betaMerchantCenterLinkingConfig;
    name?: string;
    productLevelConfig?: GoogleCloudRetailV2betaProductLevelConfig;
}
