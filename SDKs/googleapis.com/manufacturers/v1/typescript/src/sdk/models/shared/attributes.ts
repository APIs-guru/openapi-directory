import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { Capacity } from "./capacity";
import { Count } from "./count";
import { FeatureDescription } from "./featuredescription";
import { Grocery } from "./grocery";
import { Nutrition } from "./nutrition";
import { ProductDetail } from "./productdetail";
import { Price } from "./price";



// Attributes
/** 
 * Attributes of the product. For more information, see https://support.google.com/manufacturers/answer/6124116.
**/
export class Attributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalImageLink", elemType: Image })
  additionalImageLink?: Image[];

  @SpeakeasyMetadata({ data: "json, name=ageGroup" })
  ageGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=capacity" })
  capacity?: Capacity;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: Count;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disclosureDate" })
  disclosureDate?: string;

  @SpeakeasyMetadata({ data: "json, name=excludedDestination" })
  excludedDestination?: string[];

  @SpeakeasyMetadata({ data: "json, name=featureDescription", elemType: FeatureDescription })
  featureDescription?: FeatureDescription[];

  @SpeakeasyMetadata({ data: "json, name=flavor" })
  flavor?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=grocery" })
  grocery?: Grocery;

  @SpeakeasyMetadata({ data: "json, name=gtin" })
  gtin?: string[];

  @SpeakeasyMetadata({ data: "json, name=imageLink" })
  imageLink?: Image;

  @SpeakeasyMetadata({ data: "json, name=includedDestination" })
  includedDestination?: string[];

  @SpeakeasyMetadata({ data: "json, name=itemGroupId" })
  itemGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=material" })
  material?: string;

  @SpeakeasyMetadata({ data: "json, name=mpn" })
  mpn?: string;

  @SpeakeasyMetadata({ data: "json, name=nutrition" })
  nutrition?: Nutrition;

  @SpeakeasyMetadata({ data: "json, name=pattern" })
  pattern?: string;

  @SpeakeasyMetadata({ data: "json, name=productDetail", elemType: ProductDetail })
  productDetail?: ProductDetail[];

  @SpeakeasyMetadata({ data: "json, name=productHighlight" })
  productHighlight?: string[];

  @SpeakeasyMetadata({ data: "json, name=productLine" })
  productLine?: string;

  @SpeakeasyMetadata({ data: "json, name=productName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=productPageUrl" })
  productPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=productType" })
  productType?: string[];

  @SpeakeasyMetadata({ data: "json, name=releaseDate" })
  releaseDate?: string;

  @SpeakeasyMetadata({ data: "json, name=richProductContent" })
  richProductContent?: string[];

  @SpeakeasyMetadata({ data: "json, name=scent" })
  scent?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeSystem" })
  sizeSystem?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeType" })
  sizeType?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedRetailPrice" })
  suggestedRetailPrice?: Price;

  @SpeakeasyMetadata({ data: "json, name=targetClientId" })
  targetClientId?: string;

  @SpeakeasyMetadata({ data: "json, name=theme" })
  theme?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=videoLink" })
  videoLink?: string[];
}
