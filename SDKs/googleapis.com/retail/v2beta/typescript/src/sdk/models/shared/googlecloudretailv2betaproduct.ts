import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaCustomAttribute } from "./googlecloudretailv2betacustomattribute";
import { GoogleCloudRetailV2betaAudience } from "./googlecloudretailv2betaaudience";
import { GoogleCloudRetailV2betaColorInfo } from "./googlecloudretailv2betacolorinfo";
import { GoogleCloudRetailV2betaFulfillmentInfo } from "./googlecloudretailv2betafulfillmentinfo";
import { GoogleCloudRetailV2betaImage } from "./googlecloudretailv2betaimage";
import { GoogleCloudRetailV2betaLocalInventory } from "./googlecloudretailv2betalocalinventory";
import { GoogleCloudRetailV2betaPriceInfo } from "./googlecloudretailv2betapriceinfo";
import { GoogleCloudRetailV2betaPromotion } from "./googlecloudretailv2betapromotion";
import { GoogleCloudRetailV2betaRating } from "./googlecloudretailv2betarating";
import { GoogleCloudRetailV2betaProduct } from "./googlecloudretailv2betaproduct";

export enum GoogleCloudRetailV2betaProductAvailabilityEnum {
    AvailabilityUnspecified = "AVAILABILITY_UNSPECIFIED"
,    InStock = "IN_STOCK"
,    OutOfStock = "OUT_OF_STOCK"
,    Preorder = "PREORDER"
,    Backorder = "BACKORDER"
}

export enum GoogleCloudRetailV2betaProductTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Primary = "PRIMARY"
,    Variant = "VARIANT"
,    Collection = "COLLECTION"
}


// GoogleCloudRetailV2betaProduct
/** 
 * Product captures all metadata information of items to be recommended or searched.
**/
export class GoogleCloudRetailV2betaProduct extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudRetailV2betaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2betaCustomAttribute>;

  @Metadata({ data: "json, name=audience" })
  audience?: GoogleCloudRetailV2betaAudience;

  @Metadata({ data: "json, name=availability" })
  availability?: GoogleCloudRetailV2betaProductAvailabilityEnum;

  @Metadata({ data: "json, name=availableQuantity" })
  availableQuantity?: number;

  @Metadata({ data: "json, name=availableTime" })
  availableTime?: string;

  @Metadata({ data: "json, name=brands" })
  brands?: string[];

  @Metadata({ data: "json, name=categories" })
  categories?: string[];

  @Metadata({ data: "json, name=collectionMemberIds" })
  collectionMemberIds?: string[];

  @Metadata({ data: "json, name=colorInfo" })
  colorInfo?: GoogleCloudRetailV2betaColorInfo;

  @Metadata({ data: "json, name=conditions" })
  conditions?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=fulfillmentInfo", elemType: shared.GoogleCloudRetailV2betaFulfillmentInfo })
  fulfillmentInfo?: GoogleCloudRetailV2betaFulfillmentInfo[];

  @Metadata({ data: "json, name=gtin" })
  gtin?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=images", elemType: shared.GoogleCloudRetailV2betaImage })
  images?: GoogleCloudRetailV2betaImage[];

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=localInventories", elemType: shared.GoogleCloudRetailV2betaLocalInventory })
  localInventories?: GoogleCloudRetailV2betaLocalInventory[];

  @Metadata({ data: "json, name=materials" })
  materials?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=patterns" })
  patterns?: string[];

  @Metadata({ data: "json, name=priceInfo" })
  priceInfo?: GoogleCloudRetailV2betaPriceInfo;

  @Metadata({ data: "json, name=primaryProductId" })
  primaryProductId?: string;

  @Metadata({ data: "json, name=promotions", elemType: shared.GoogleCloudRetailV2betaPromotion })
  promotions?: GoogleCloudRetailV2betaPromotion[];

  @Metadata({ data: "json, name=publishTime" })
  publishTime?: string;

  @Metadata({ data: "json, name=rating" })
  rating?: GoogleCloudRetailV2betaRating;

  @Metadata({ data: "json, name=retrievableFields" })
  retrievableFields?: string;

  @Metadata({ data: "json, name=sizes" })
  sizes?: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudRetailV2betaProductTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=variants", elemType: shared.GoogleCloudRetailV2betaProduct })
  variants?: GoogleCloudRetailV2betaProduct[];
}
