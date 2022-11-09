import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2CustomAttribute } from "./googlecloudretailv2customattribute";
import { GoogleCloudRetailV2Audience } from "./googlecloudretailv2audience";
import { GoogleCloudRetailV2ColorInfo } from "./googlecloudretailv2colorinfo";
import { GoogleCloudRetailV2FulfillmentInfo } from "./googlecloudretailv2fulfillmentinfo";
import { GoogleCloudRetailV2Image } from "./googlecloudretailv2image";
import { GoogleCloudRetailV2LocalInventory } from "./googlecloudretailv2localinventory";
import { GoogleCloudRetailV2PriceInfo } from "./googlecloudretailv2priceinfo";
import { GoogleCloudRetailV2Promotion } from "./googlecloudretailv2promotion";
import { GoogleCloudRetailV2Rating } from "./googlecloudretailv2rating";
import { GoogleCloudRetailV2Product } from "./googlecloudretailv2product";

export enum GoogleCloudRetailV2ProductAvailabilityEnum {
    AvailabilityUnspecified = "AVAILABILITY_UNSPECIFIED"
,    InStock = "IN_STOCK"
,    OutOfStock = "OUT_OF_STOCK"
,    Preorder = "PREORDER"
,    Backorder = "BACKORDER"
}

export enum GoogleCloudRetailV2ProductTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Primary = "PRIMARY"
,    Variant = "VARIANT"
,    Collection = "COLLECTION"
}


// GoogleCloudRetailV2Product
/** 
 * Product captures all metadata information of items to be recommended or searched.
**/
export class GoogleCloudRetailV2Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.GoogleCloudRetailV2CustomAttribute })
  attributes?: Map<string, GoogleCloudRetailV2CustomAttribute>;

  @Metadata({ data: "json, name=audience" })
  audience?: GoogleCloudRetailV2Audience;

  @Metadata({ data: "json, name=availability" })
  availability?: GoogleCloudRetailV2ProductAvailabilityEnum;

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
  colorInfo?: GoogleCloudRetailV2ColorInfo;

  @Metadata({ data: "json, name=conditions" })
  conditions?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=fulfillmentInfo", elemType: shared.GoogleCloudRetailV2FulfillmentInfo })
  fulfillmentInfo?: GoogleCloudRetailV2FulfillmentInfo[];

  @Metadata({ data: "json, name=gtin" })
  gtin?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=images", elemType: shared.GoogleCloudRetailV2Image })
  images?: GoogleCloudRetailV2Image[];

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=localInventories", elemType: shared.GoogleCloudRetailV2LocalInventory })
  localInventories?: GoogleCloudRetailV2LocalInventory[];

  @Metadata({ data: "json, name=materials" })
  materials?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=patterns" })
  patterns?: string[];

  @Metadata({ data: "json, name=priceInfo" })
  priceInfo?: GoogleCloudRetailV2PriceInfo;

  @Metadata({ data: "json, name=primaryProductId" })
  primaryProductId?: string;

  @Metadata({ data: "json, name=promotions", elemType: shared.GoogleCloudRetailV2Promotion })
  promotions?: GoogleCloudRetailV2Promotion[];

  @Metadata({ data: "json, name=publishTime" })
  publishTime?: string;

  @Metadata({ data: "json, name=rating" })
  rating?: GoogleCloudRetailV2Rating;

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
  type?: GoogleCloudRetailV2ProductTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=variants", elemType: shared.GoogleCloudRetailV2Product })
  variants?: GoogleCloudRetailV2Product[];
}
