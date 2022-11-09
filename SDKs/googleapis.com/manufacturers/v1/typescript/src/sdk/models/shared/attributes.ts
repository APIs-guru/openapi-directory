import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Image } from "./image";
import { Capacity } from "./capacity";
import { Count } from "./count";
import { FeatureDescription } from "./featuredescription";
import { Grocery } from "./grocery";
import { Image } from "./image";
import { Nutrition } from "./nutrition";
import { ProductDetail } from "./productdetail";
import { Price } from "./price";


// Attributes
/** 
 * Attributes of the product. For more information, see https://support.google.com/manufacturers/answer/6124116.
**/
export class Attributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalImageLink", elemType: shared.Image })
  additionalImageLink?: Image[];

  @Metadata({ data: "json, name=ageGroup" })
  ageGroup?: string;

  @Metadata({ data: "json, name=brand" })
  brand?: string;

  @Metadata({ data: "json, name=capacity" })
  capacity?: Capacity;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=count" })
  count?: Count;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=disclosureDate" })
  disclosureDate?: string;

  @Metadata({ data: "json, name=excludedDestination" })
  excludedDestination?: string[];

  @Metadata({ data: "json, name=featureDescription", elemType: shared.FeatureDescription })
  featureDescription?: FeatureDescription[];

  @Metadata({ data: "json, name=flavor" })
  flavor?: string;

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=grocery" })
  grocery?: Grocery;

  @Metadata({ data: "json, name=gtin" })
  gtin?: string[];

  @Metadata({ data: "json, name=imageLink" })
  imageLink?: Image;

  @Metadata({ data: "json, name=includedDestination" })
  includedDestination?: string[];

  @Metadata({ data: "json, name=itemGroupId" })
  itemGroupId?: string;

  @Metadata({ data: "json, name=material" })
  material?: string;

  @Metadata({ data: "json, name=mpn" })
  mpn?: string;

  @Metadata({ data: "json, name=nutrition" })
  nutrition?: Nutrition;

  @Metadata({ data: "json, name=pattern" })
  pattern?: string;

  @Metadata({ data: "json, name=productDetail", elemType: shared.ProductDetail })
  productDetail?: ProductDetail[];

  @Metadata({ data: "json, name=productHighlight" })
  productHighlight?: string[];

  @Metadata({ data: "json, name=productLine" })
  productLine?: string;

  @Metadata({ data: "json, name=productName" })
  productName?: string;

  @Metadata({ data: "json, name=productPageUrl" })
  productPageUrl?: string;

  @Metadata({ data: "json, name=productType" })
  productType?: string[];

  @Metadata({ data: "json, name=releaseDate" })
  releaseDate?: string;

  @Metadata({ data: "json, name=richProductContent" })
  richProductContent?: string[];

  @Metadata({ data: "json, name=scent" })
  scent?: string;

  @Metadata({ data: "json, name=size" })
  size?: string;

  @Metadata({ data: "json, name=sizeSystem" })
  sizeSystem?: string;

  @Metadata({ data: "json, name=sizeType" })
  sizeType?: string[];

  @Metadata({ data: "json, name=suggestedRetailPrice" })
  suggestedRetailPrice?: Price;

  @Metadata({ data: "json, name=targetClientId" })
  targetClientId?: string;

  @Metadata({ data: "json, name=theme" })
  theme?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=videoLink" })
  videoLink?: string[];
}
