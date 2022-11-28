import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CustomAttribute } from "./googlecloudretailv2customattribute";
import { GoogleCloudRetailV2Audience } from "./googlecloudretailv2audience";
import { GoogleCloudRetailV2ColorInfo } from "./googlecloudretailv2colorinfo";
import { GoogleCloudRetailV2FulfillmentInfo } from "./googlecloudretailv2fulfillmentinfo";
import { GoogleCloudRetailV2Image } from "./googlecloudretailv2image";
import { GoogleCloudRetailV2LocalInventory } from "./googlecloudretailv2localinventory";
import { GoogleCloudRetailV2PriceInfo } from "./googlecloudretailv2priceinfo";
import { GoogleCloudRetailV2Promotion } from "./googlecloudretailv2promotion";
import { GoogleCloudRetailV2Rating } from "./googlecloudretailv2rating";
export declare enum GoogleCloudRetailV2ProductAvailabilityEnum {
    AvailabilityUnspecified = "AVAILABILITY_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    Preorder = "PREORDER",
    Backorder = "BACKORDER"
}
export declare enum GoogleCloudRetailV2ProductTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Primary = "PRIMARY",
    Variant = "VARIANT",
    Collection = "COLLECTION"
}
/**
 * Product captures all metadata information of items to be recommended or searched.
**/
export declare class GoogleCloudRetailV2Product extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2CustomAttribute>;
    audience?: GoogleCloudRetailV2Audience;
    availability?: GoogleCloudRetailV2ProductAvailabilityEnum;
    availableQuantity?: number;
    availableTime?: string;
    brands?: string[];
    categories?: string[];
    collectionMemberIds?: string[];
    colorInfo?: GoogleCloudRetailV2ColorInfo;
    conditions?: string[];
    description?: string;
    expireTime?: string;
    fulfillmentInfo?: GoogleCloudRetailV2FulfillmentInfo[];
    gtin?: string;
    id?: string;
    images?: GoogleCloudRetailV2Image[];
    languageCode?: string;
    localInventories?: GoogleCloudRetailV2LocalInventory[];
    materials?: string[];
    name?: string;
    patterns?: string[];
    priceInfo?: GoogleCloudRetailV2PriceInfo;
    primaryProductId?: string;
    promotions?: GoogleCloudRetailV2Promotion[];
    publishTime?: string;
    rating?: GoogleCloudRetailV2Rating;
    retrievableFields?: string;
    sizes?: string[];
    tags?: string[];
    title?: string;
    ttl?: string;
    type?: GoogleCloudRetailV2ProductTypeEnum;
    uri?: string;
    variants?: GoogleCloudRetailV2Product[];
}
/**
 * Product captures all metadata information of items to be recommended or searched.
**/
export declare class GoogleCloudRetailV2ProductInput extends SpeakeasyBase {
    attributes?: Map<string, GoogleCloudRetailV2CustomAttribute>;
    audience?: GoogleCloudRetailV2Audience;
    availability?: GoogleCloudRetailV2ProductAvailabilityEnum;
    availableQuantity?: number;
    availableTime?: string;
    brands?: string[];
    categories?: string[];
    collectionMemberIds?: string[];
    colorInfo?: GoogleCloudRetailV2ColorInfo;
    conditions?: string[];
    description?: string;
    expireTime?: string;
    fulfillmentInfo?: GoogleCloudRetailV2FulfillmentInfo[];
    gtin?: string;
    id?: string;
    images?: GoogleCloudRetailV2Image[];
    languageCode?: string;
    materials?: string[];
    name?: string;
    patterns?: string[];
    priceInfo?: GoogleCloudRetailV2PriceInfo;
    primaryProductId?: string;
    promotions?: GoogleCloudRetailV2Promotion[];
    publishTime?: string;
    rating?: GoogleCloudRetailV2Rating;
    retrievableFields?: string;
    sizes?: string[];
    tags?: string[];
    title?: string;
    ttl?: string;
    type?: GoogleCloudRetailV2ProductTypeEnum;
    uri?: string;
}
