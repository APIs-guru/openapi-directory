import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaCustomAttribute } from "./googlecloudretailv2betacustomattribute";
import { GoogleCloudRetailV2betaAudience } from "./googlecloudretailv2betaaudience";
import { GoogleCloudRetailV2betaColorInfo } from "./googlecloudretailv2betacolorinfo";
import { GoogleCloudRetailV2betaFulfillmentInfo } from "./googlecloudretailv2betafulfillmentinfo";
import { GoogleCloudRetailV2betaImage } from "./googlecloudretailv2betaimage";
import { GoogleCloudRetailV2betaPriceInfo } from "./googlecloudretailv2betapriceinfo";
import { GoogleCloudRetailV2betaPromotion } from "./googlecloudretailv2betapromotion";
import { GoogleCloudRetailV2betaRating } from "./googlecloudretailv2betarating";
import { GoogleCloudRetailV2betaLocalInventory } from "./googlecloudretailv2betalocalinventory";


export enum GoogleCloudRetailV2betaProductAvailabilityEnum {
    AvailabilityUnspecified = "AVAILABILITY_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    Preorder = "PREORDER",
    Backorder = "BACKORDER"
}

export enum GoogleCloudRetailV2betaProductTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Primary = "PRIMARY",
    Variant = "VARIANT",
    Collection = "COLLECTION"
}


// GoogleCloudRetailV2betaProductInput
/** 
 * Product captures all metadata information of items to be recommended or searched.
**/
export class GoogleCloudRetailV2betaProductInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2betaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2betaCustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=audience" })
  audience?: GoogleCloudRetailV2betaAudience;

  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: GoogleCloudRetailV2betaProductAvailabilityEnum;

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
  colorInfo?: GoogleCloudRetailV2betaColorInfo;

  @SpeakeasyMetadata({ data: "json, name=conditions" })
  conditions?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentInfo", elemType: GoogleCloudRetailV2betaFulfillmentInfo })
  fulfillmentInfo?: GoogleCloudRetailV2betaFulfillmentInfo[];

  @SpeakeasyMetadata({ data: "json, name=gtin" })
  gtin?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: GoogleCloudRetailV2betaImage })
  images?: GoogleCloudRetailV2betaImage[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=materials" })
  materials?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=patterns" })
  patterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=priceInfo" })
  priceInfo?: GoogleCloudRetailV2betaPriceInfo;

  @SpeakeasyMetadata({ data: "json, name=primaryProductId" })
  primaryProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=promotions", elemType: GoogleCloudRetailV2betaPromotion })
  promotions?: GoogleCloudRetailV2betaPromotion[];

  @SpeakeasyMetadata({ data: "json, name=publishTime" })
  publishTime?: string;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: GoogleCloudRetailV2betaRating;

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
  type?: GoogleCloudRetailV2betaProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// GoogleCloudRetailV2betaProduct
/** 
 * Product captures all metadata information of items to be recommended or searched.
**/
export class GoogleCloudRetailV2betaProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudRetailV2betaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2betaCustomAttribute>;

  @SpeakeasyMetadata({ data: "json, name=audience" })
  audience?: GoogleCloudRetailV2betaAudience;

  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: GoogleCloudRetailV2betaProductAvailabilityEnum;

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
  colorInfo?: GoogleCloudRetailV2betaColorInfo;

  @SpeakeasyMetadata({ data: "json, name=conditions" })
  conditions?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentInfo", elemType: GoogleCloudRetailV2betaFulfillmentInfo })
  fulfillmentInfo?: GoogleCloudRetailV2betaFulfillmentInfo[];

  @SpeakeasyMetadata({ data: "json, name=gtin" })
  gtin?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: GoogleCloudRetailV2betaImage })
  images?: GoogleCloudRetailV2betaImage[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=localInventories", elemType: GoogleCloudRetailV2betaLocalInventory })
  localInventories?: GoogleCloudRetailV2betaLocalInventory[];

  @SpeakeasyMetadata({ data: "json, name=materials" })
  materials?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=patterns" })
  patterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=priceInfo" })
  priceInfo?: GoogleCloudRetailV2betaPriceInfo;

  @SpeakeasyMetadata({ data: "json, name=primaryProductId" })
  primaryProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=promotions", elemType: GoogleCloudRetailV2betaPromotion })
  promotions?: GoogleCloudRetailV2betaPromotion[];

  @SpeakeasyMetadata({ data: "json, name=publishTime" })
  publishTime?: string;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating?: GoogleCloudRetailV2betaRating;

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
  type?: GoogleCloudRetailV2betaProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=variants", elemType: GoogleCloudRetailV2betaProduct })
  variants?: GoogleCloudRetailV2betaProduct[];
}
