import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCustomAttribute } from "./googlecloudretailv2betacustomattribute";
import { GoogleCloudRetailV2betaAudience } from "./googlecloudretailv2betaaudience";
import { GoogleCloudRetailV2betaColorInfo } from "./googlecloudretailv2betacolorinfo";
import { GoogleCloudRetailV2betaFulfillmentInfo } from "./googlecloudretailv2betafulfillmentinfo";
import { GoogleCloudRetailV2betaImage } from "./googlecloudretailv2betaimage";
import { GoogleCloudRetailV2betaPriceInfo } from "./googlecloudretailv2betapriceinfo";
import { GoogleCloudRetailV2betaPromotion } from "./googlecloudretailv2betapromotion";
import { GoogleCloudRetailV2betaRating } from "./googlecloudretailv2betarating";
import { GoogleCloudRetailV2betaLocalInventory } from "./googlecloudretailv2betalocalinventory";
export declare enum GoogleCloudRetailV2betaProductAvailabilityEnum {
    AvailabilityUnspecified = "AVAILABILITY_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    Preorder = "PREORDER",
    Backorder = "BACKORDER"
}
export declare enum GoogleCloudRetailV2betaProductTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Primary = "PRIMARY",
    Variant = "VARIANT",
    Collection = "COLLECTION"
}
/**
 * Product captures all metadata information of items to be recommended or searched.
**/
export declare class GoogleCloudRetailV2betaProductInput extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2betaCustomAttribute>;
    audience?: GoogleCloudRetailV2betaAudience;
    availability?: GoogleCloudRetailV2betaProductAvailabilityEnum;
    availableQuantity?: number;
    availableTime?: string;
    brands?: string[];
    categories?: string[];
    collectionMemberIds?: string[];
    colorInfo?: GoogleCloudRetailV2betaColorInfo;
    conditions?: string[];
    description?: string;
    expireTime?: string;
    fulfillmentInfo?: GoogleCloudRetailV2betaFulfillmentInfo[];
    gtin?: string;
    id?: string;
    images?: GoogleCloudRetailV2betaImage[];
    languageCode?: string;
    materials?: string[];
    name?: string;
    patterns?: string[];
    priceInfo?: GoogleCloudRetailV2betaPriceInfo;
    primaryProductId?: string;
    promotions?: GoogleCloudRetailV2betaPromotion[];
    publishTime?: string;
    rating?: GoogleCloudRetailV2betaRating;
    retrievableFields?: string;
    sizes?: string[];
    tags?: string[];
    title?: string;
    ttl?: string;
    type?: GoogleCloudRetailV2betaProductTypeEnum;
    uri?: string;
}
/**
 * Product captures all metadata information of items to be recommended or searched.
**/
export declare class GoogleCloudRetailV2betaProduct extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2betaCustomAttribute>;
    audience?: GoogleCloudRetailV2betaAudience;
    availability?: GoogleCloudRetailV2betaProductAvailabilityEnum;
    availableQuantity?: number;
    availableTime?: string;
    brands?: string[];
    categories?: string[];
    collectionMemberIds?: string[];
    colorInfo?: GoogleCloudRetailV2betaColorInfo;
    conditions?: string[];
    description?: string;
    expireTime?: string;
    fulfillmentInfo?: GoogleCloudRetailV2betaFulfillmentInfo[];
    gtin?: string;
    id?: string;
    images?: GoogleCloudRetailV2betaImage[];
    languageCode?: string;
    localInventories?: GoogleCloudRetailV2betaLocalInventory[];
    materials?: string[];
    name?: string;
    patterns?: string[];
    priceInfo?: GoogleCloudRetailV2betaPriceInfo;
    primaryProductId?: string;
    promotions?: GoogleCloudRetailV2betaPromotion[];
    publishTime?: string;
    rating?: GoogleCloudRetailV2betaRating;
    retrievableFields?: string;
    sizes?: string[];
    tags?: string[];
    title?: string;
    ttl?: string;
    type?: GoogleCloudRetailV2betaProductTypeEnum;
    uri?: string;
    variants?: GoogleCloudRetailV2betaProduct[];
}
