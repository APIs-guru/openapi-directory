import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCustomAttribute } from "./googlecloudretailv2alphacustomattribute";
import { GoogleCloudRetailV2alphaAudience } from "./googlecloudretailv2alphaaudience";
import { GoogleCloudRetailV2alphaColorInfo } from "./googlecloudretailv2alphacolorinfo";
import { GoogleCloudRetailV2alphaFulfillmentInfo } from "./googlecloudretailv2alphafulfillmentinfo";
import { GoogleCloudRetailV2alphaImage } from "./googlecloudretailv2alphaimage";
import { GoogleCloudRetailV2alphaPriceInfo } from "./googlecloudretailv2alphapriceinfo";
import { GoogleCloudRetailV2alphaPromotion } from "./googlecloudretailv2alphapromotion";
import { GoogleCloudRetailV2alphaRating } from "./googlecloudretailv2alpharating";
import { GoogleCloudRetailV2alphaLocalInventory } from "./googlecloudretailv2alphalocalinventory";
export declare enum GoogleCloudRetailV2alphaProductAvailabilityEnum {
    AvailabilityUnspecified = "AVAILABILITY_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    Preorder = "PREORDER",
    Backorder = "BACKORDER"
}
export declare enum GoogleCloudRetailV2alphaProductTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Primary = "PRIMARY",
    Variant = "VARIANT",
    Collection = "COLLECTION"
}
/**
 * Product captures all metadata information of items to be recommended or searched.
**/
export declare class GoogleCloudRetailV2alphaProductInput extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2alphaCustomAttribute>;
    audience?: GoogleCloudRetailV2alphaAudience;
    availability?: GoogleCloudRetailV2alphaProductAvailabilityEnum;
    availableQuantity?: number;
    availableTime?: string;
    brands?: string[];
    categories?: string[];
    collectionMemberIds?: string[];
    colorInfo?: GoogleCloudRetailV2alphaColorInfo;
    conditions?: string[];
    description?: string;
    expireTime?: string;
    fulfillmentInfo?: GoogleCloudRetailV2alphaFulfillmentInfo[];
    gtin?: string;
    id?: string;
    images?: GoogleCloudRetailV2alphaImage[];
    languageCode?: string;
    materials?: string[];
    name?: string;
    patterns?: string[];
    priceInfo?: GoogleCloudRetailV2alphaPriceInfo;
    primaryProductId?: string;
    promotions?: GoogleCloudRetailV2alphaPromotion[];
    publishTime?: string;
    rating?: GoogleCloudRetailV2alphaRating;
    retrievableFields?: string;
    sizes?: string[];
    tags?: string[];
    title?: string;
    ttl?: string;
    type?: GoogleCloudRetailV2alphaProductTypeEnum;
    uri?: string;
}
/**
 * Product captures all metadata information of items to be recommended or searched.
**/
export declare class GoogleCloudRetailV2alphaProduct extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2alphaCustomAttribute>;
    audience?: GoogleCloudRetailV2alphaAudience;
    availability?: GoogleCloudRetailV2alphaProductAvailabilityEnum;
    availableQuantity?: number;
    availableTime?: string;
    brands?: string[];
    categories?: string[];
    collectionMemberIds?: string[];
    colorInfo?: GoogleCloudRetailV2alphaColorInfo;
    conditions?: string[];
    description?: string;
    expireTime?: string;
    fulfillmentInfo?: GoogleCloudRetailV2alphaFulfillmentInfo[];
    gtin?: string;
    id?: string;
    images?: GoogleCloudRetailV2alphaImage[];
    languageCode?: string;
    localInventories?: GoogleCloudRetailV2alphaLocalInventory[];
    materials?: string[];
    name?: string;
    patterns?: string[];
    priceInfo?: GoogleCloudRetailV2alphaPriceInfo;
    primaryProductId?: string;
    promotions?: GoogleCloudRetailV2alphaPromotion[];
    publishTime?: string;
    rating?: GoogleCloudRetailV2alphaRating;
    retrievableFields?: string;
    sizes?: string[];
    tags?: string[];
    title?: string;
    ttl?: string;
    type?: GoogleCloudRetailV2alphaProductTypeEnum;
    uri?: string;
    variants?: GoogleCloudRetailV2alphaProduct[];
}
