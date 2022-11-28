import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCustomAttribute } from "./googlecloudretailv2alphacustomattribute";
import { GoogleCloudRetailV2alphaAudience } from "./googlecloudretailv2alphaaudience";
import { GoogleCloudRetailV2alphaColorInfo } from "./googlecloudretailv2alphacolorinfo";
import { GoogleCloudRetailV2alphaFulfillmentInfo } from "./googlecloudretailv2alphafulfillmentinfo";
import { GoogleCloudRetailV2alphaImage } from "./googlecloudretailv2alphaimage";
import { GoogleCloudRetailV2alphaPriceInfo } from "./googlecloudretailv2alphapriceinfo";
import { GoogleCloudRetailV2alphaPromotion } from "./googlecloudretailv2alphapromotion";
import { GoogleCloudRetailV2alphaRating } from "./googlecloudretailv2alpharating";
import { GoogleCloudRetailV2alphaLocalInventory } from "./googlecloudretailv2alphalocalinventory";


export enum GoogleCloudRetailV2alphaProductAvailabilityEnum {
    AvailabilityUnspecified = "AVAILABILITY_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    Preorder = "PREORDER",
    Backorder = "BACKORDER"
}

export enum GoogleCloudRetailV2alphaProductTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Primary = "PRIMARY",
    Variant = "VARIANT",
    Collection = "COLLECTION"
}


// GoogleCloudRetailV2alphaProductInput
/** 
 * Product captures all metadata information of items to be recommended or searched.
**/
export class GoogleCloudRetailV2alphaProductInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2alphaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2alphaCustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=audience" })
  audience?: GoogleCloudRetailV2alphaAudience;

  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: GoogleCloudRetailV2alphaProductAvailabilityEnum;

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
  colorInfo?: GoogleCloudRetailV2alphaColorInfo;

  @SpeakeasyMetadata({ data: "json, name=conditions" })
  conditions?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentInfo", elemType: GoogleCloudRetailV2alphaFulfillmentInfo })
  fulfillmentInfo?: GoogleCloudRetailV2alphaFulfillmentInfo[];

  @SpeakeasyMetadata({ data: "json, name=gtin" })
  gtin?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: GoogleCloudRetailV2alphaImage })
  images?: GoogleCloudRetailV2alphaImage[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=materials" })
  materials?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=patterns" })
  patterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=priceInfo" })
  priceInfo?: GoogleCloudRetailV2alphaPriceInfo;

  @SpeakeasyMetadata({ data: "json, name=primaryProductId" })
  primaryProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=promotions", elemType: GoogleCloudRetailV2alphaPromotion })
  promotions?: GoogleCloudRetailV2alphaPromotion[];

  @SpeakeasyMetadata({ data: "json, name=publishTime" })
  publishTime?: string;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: GoogleCloudRetailV2alphaRating;

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
  type?: GoogleCloudRetailV2alphaProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// GoogleCloudRetailV2alphaProduct
/** 
 * Product captures all metadata information of items to be recommended or searched.
**/
export class GoogleCloudRetailV2alphaProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2alphaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2alphaCustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=audience" })
  audience?: GoogleCloudRetailV2alphaAudience;

  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: GoogleCloudRetailV2alphaProductAvailabilityEnum;

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
  colorInfo?: GoogleCloudRetailV2alphaColorInfo;

  @SpeakeasyMetadata({ data: "json, name=conditions" })
  conditions?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentInfo", elemType: GoogleCloudRetailV2alphaFulfillmentInfo })
  fulfillmentInfo?: GoogleCloudRetailV2alphaFulfillmentInfo[];

  @SpeakeasyMetadata({ data: "json, name=gtin" })
  gtin?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: GoogleCloudRetailV2alphaImage })
  images?: GoogleCloudRetailV2alphaImage[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=localInventories", elemType: GoogleCloudRetailV2alphaLocalInventory })
  localInventories?: GoogleCloudRetailV2alphaLocalInventory[];

  @SpeakeasyMetadata({ data: "json, name=materials" })
  materials?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=patterns" })
  patterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=priceInfo" })
  priceInfo?: GoogleCloudRetailV2alphaPriceInfo;

  @SpeakeasyMetadata({ data: "json, name=primaryProductId" })
  primaryProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=promotions", elemType: GoogleCloudRetailV2alphaPromotion })
  promotions?: GoogleCloudRetailV2alphaPromotion[];

  @SpeakeasyMetadata({ data: "json, name=publishTime" })
  publishTime?: string;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: GoogleCloudRetailV2alphaRating;

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
  type?: GoogleCloudRetailV2alphaProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=variants", elemType: GoogleCloudRetailV2alphaProduct })
  variants?: GoogleCloudRetailV2alphaProduct[];
}
