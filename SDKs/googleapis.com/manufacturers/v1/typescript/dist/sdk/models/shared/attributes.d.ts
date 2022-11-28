import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { Capacity } from "./capacity";
import { Count } from "./count";
import { FeatureDescription } from "./featuredescription";
import { Grocery } from "./grocery";
import { Nutrition } from "./nutrition";
import { ProductDetail } from "./productdetail";
import { Price } from "./price";
/**
 * Attributes of the product. For more information, see https://support.google.com/manufacturers/answer/6124116.
**/
export declare class Attributes extends SpeakeasyBase {
    additionalImageLink?: Image[];
    ageGroup?: string;
    brand?: string;
    capacity?: Capacity;
    color?: string;
    count?: Count;
    description?: string;
    disclosureDate?: string;
    excludedDestination?: string[];
    featureDescription?: FeatureDescription[];
    flavor?: string;
    format?: string;
    gender?: string;
    grocery?: Grocery;
    gtin?: string[];
    imageLink?: Image;
    includedDestination?: string[];
    itemGroupId?: string;
    material?: string;
    mpn?: string;
    nutrition?: Nutrition;
    pattern?: string;
    productDetail?: ProductDetail[];
    productHighlight?: string[];
    productLine?: string;
    productName?: string;
    productPageUrl?: string;
    productType?: string[];
    releaseDate?: string;
    richProductContent?: string[];
    scent?: string;
    size?: string;
    sizeSystem?: string;
    sizeType?: string[];
    suggestedRetailPrice?: Price;
    targetClientId?: string;
    theme?: string;
    title?: string;
    videoLink?: string[];
}
