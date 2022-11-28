import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2CustomAttribute } from "./googlecloudretailv2customattribute";
import { GoogleCloudRetailV2Audience } from "./googlecloudretailv2audience";
import { GoogleCloudRetailV2ColorInfo } from "./googlecloudretailv2colorinfo";
import { GoogleCloudRetailV2FulfillmentInfo } from "./googlecloudretailv2fulfillmentinfo";
import { GoogleCloudRetailV2Image } from "./googlecloudretailv2image";
import { GoogleCloudRetailV2LocalInventory } from "./googlecloudretailv2localinventory";
import { GoogleCloudRetailV2PriceInfo } from "./googlecloudretailv2priceinfo";
import { GoogleCloudRetailV2Promotion } from "./googlecloudretailv2promotion";
import { GoogleCloudRetailV2Rating } from "./googlecloudretailv2rating";


export enum GoogleCloudRetailV2ProductAvailabilityEnum {
    AvailabilityUnspecified = "AVAILABILITY_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    Preorder = "PREORDER",
    Backorder = "BACKORDER"
}

export enum GoogleCloudRetailV2ProductTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Primary = "PRIMARY",
    Variant = "VARIANT",
    Collection = "COLLECTION"
}


// GoogleCloudRetailV2Product
/** 
 * Product captures all metadata information of items to be recommended or searched.
**/
export class GoogleCloudRetailV2Product extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2CustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2CustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=audience" })
  audience?: GoogleCloudRetailV2Audience;

  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: GoogleCloudRetailV2ProductAvailabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=availableQuantity" })
  availableQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=availableTime" })
  availableTime?: string;

  @SpeakeasyMetadata({ data: "json, name=brands" })
  brands?: string[];

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: string[];

  @SpeakeasyMetadata({ data: "json, name=collectionMemberIds" })
  collectionMemberIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=colorInfo" })
  colorInfo?: GoogleCloudRetailV2ColorInfo;

  @SpeakeasyMetadata({ data: "json, name=conditions" })
  conditions?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentInfo", elemType: GoogleCloudRetailV2FulfillmentInfo })
  fulfillmentInfo?: GoogleCloudRetailV2FulfillmentInfo[];

  @SpeakeasyMetadata({ data: "json, name=gtin" })
  gtin?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: GoogleCloudRetailV2Image })
  images?: GoogleCloudRetailV2Image[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=localInventories", elemType: GoogleCloudRetailV2LocalInventory })
  localInventories?: GoogleCloudRetailV2LocalInventory[];

  @SpeakeasyMetadata({ data: "json, name=materials" })
  materials?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=patterns" })
  patterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=priceInfo" })
  priceInfo?: GoogleCloudRetailV2PriceInfo;

  @SpeakeasyMetadata({ data: "json, name=primaryProductId" })
  primaryProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=promotions", elemType: GoogleCloudRetailV2Promotion })
  promotions?: GoogleCloudRetailV2Promotion[];

  @SpeakeasyMetadata({ data: "json, name=publishTime" })
  publishTime?: string;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: GoogleCloudRetailV2Rating;

  @SpeakeasyMetadata({ data: "json, name=retrievableFields" })
  retrievableFields?: string;

  @SpeakeasyMetadata({ data: "json, name=sizes" })
  sizes?: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudRetailV2ProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=variants", elemType: GoogleCloudRetailV2Product })
  variants?: GoogleCloudRetailV2Product[];
}


// GoogleCloudRetailV2ProductInput
/** 
 * Product captures all metadata information of items to be recommended or searched.
**/
export class GoogleCloudRetailV2ProductInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2CustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2CustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=audience" })
  audience?: GoogleCloudRetailV2Audience;

  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: GoogleCloudRetailV2ProductAvailabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=availableQuantity" })
  availableQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=availableTime" })
  availableTime?: string;

  @SpeakeasyMetadata({ data: "json, name=brands" })
  brands?: string[];

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: string[];

  @SpeakeasyMetadata({ data: "json, name=collectionMemberIds" })
  collectionMemberIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=colorInfo" })
  colorInfo?: GoogleCloudRetailV2ColorInfo;

  @SpeakeasyMetadata({ data: "json, name=conditions" })
  conditions?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentInfo", elemType: GoogleCloudRetailV2FulfillmentInfo })
  fulfillmentInfo?: GoogleCloudRetailV2FulfillmentInfo[];

  @SpeakeasyMetadata({ data: "json, name=gtin" })
  gtin?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: GoogleCloudRetailV2Image })
  images?: GoogleCloudRetailV2Image[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=materials" })
  materials?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=patterns" })
  patterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=priceInfo" })
  priceInfo?: GoogleCloudRetailV2PriceInfo;

  @SpeakeasyMetadata({ data: "json, name=primaryProductId" })
  primaryProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=promotions", elemType: GoogleCloudRetailV2Promotion })
  promotions?: GoogleCloudRetailV2Promotion[];

  @SpeakeasyMetadata({ data: "json, name=publishTime" })
  publishTime?: string;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: GoogleCloudRetailV2Rating;

  @SpeakeasyMetadata({ data: "json, name=retrievableFields" })
  retrievableFields?: string;

  @SpeakeasyMetadata({ data: "json, name=sizes" })
  sizes?: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudRetailV2ProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
