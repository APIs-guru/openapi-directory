import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaCustomAttribute } from "./googlecloudretailv2alphacustomattribute";
import { GoogleCloudRetailV2alphaAudience } from "./googlecloudretailv2alphaaudience";
import { GoogleCloudRetailV2alphaColorInfo } from "./googlecloudretailv2alphacolorinfo";
import { GoogleCloudRetailV2alphaFulfillmentInfo } from "./googlecloudretailv2alphafulfillmentinfo";
import { GoogleCloudRetailV2alphaImage } from "./googlecloudretailv2alphaimage";
import { GoogleCloudRetailV2alphaLocalInventory } from "./googlecloudretailv2alphalocalinventory";
import { GoogleCloudRetailV2alphaPriceInfo } from "./googlecloudretailv2alphapriceinfo";
import { GoogleCloudRetailV2alphaPromotion } from "./googlecloudretailv2alphapromotion";
import { GoogleCloudRetailV2alphaRating } from "./googlecloudretailv2alpharating";
import { GoogleCloudRetailV2alphaProduct } from "./googlecloudretailv2alphaproduct";

export enum GoogleCloudRetailV2alphaProductAvailabilityEnum {
    AvailabilityUnspecified = "AVAILABILITY_UNSPECIFIED"
,    InStock = "IN_STOCK"
,    OutOfStock = "OUT_OF_STOCK"
,    Preorder = "PREORDER"
,    Backorder = "BACKORDER"
}

export enum GoogleCloudRetailV2alphaProductTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Primary = "PRIMARY"
,    Variant = "VARIANT"
,    Collection = "COLLECTION"
}


// GoogleCloudRetailV2alphaProduct
/** 
 * Product captures all metadata information of items to be recommended or searched.
**/
export class GoogleCloudRetailV2alphaProduct extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudRetailV2alphaCustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2alphaCustomAttribute>;

  @Metadata({ data: "json, name=audience" })
  audience?: GoogleCloudRetailV2alphaAudience;

  @Metadata({ data: "json, name=availability" })
  availability?: GoogleCloudRetailV2alphaProductAvailabilityEnum;

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
  colorInfo?: GoogleCloudRetailV2alphaColorInfo;

  @Metadata({ data: "json, name=conditions" })
  conditions?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=fulfillmentInfo", elemType: shared.GoogleCloudRetailV2alphaFulfillmentInfo })
  fulfillmentInfo?: GoogleCloudRetailV2alphaFulfillmentInfo[];

  @Metadata({ data: "json, name=gtin" })
  gtin?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=images", elemType: shared.GoogleCloudRetailV2alphaImage })
  images?: GoogleCloudRetailV2alphaImage[];

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=localInventories", elemType: shared.GoogleCloudRetailV2alphaLocalInventory })
  localInventories?: GoogleCloudRetailV2alphaLocalInventory[];

  @Metadata({ data: "json, name=materials" })
  materials?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=patterns" })
  patterns?: string[];

  @Metadata({ data: "json, name=priceInfo" })
  priceInfo?: GoogleCloudRetailV2alphaPriceInfo;

  @Metadata({ data: "json, name=primaryProductId" })
  primaryProductId?: string;

  @Metadata({ data: "json, name=promotions", elemType: shared.GoogleCloudRetailV2alphaPromotion })
  promotions?: GoogleCloudRetailV2alphaPromotion[];

  @Metadata({ data: "json, name=publishTime" })
  publishTime?: string;

  @Metadata({ data: "json, name=rating" })
  rating?: GoogleCloudRetailV2alphaRating;

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
  type?: GoogleCloudRetailV2alphaProductTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=variants", elemType: shared.GoogleCloudRetailV2alphaProduct })
  variants?: GoogleCloudRetailV2alphaProduct[];
}
