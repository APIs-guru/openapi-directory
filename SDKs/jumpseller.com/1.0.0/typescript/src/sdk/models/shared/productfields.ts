import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryFields } from "./categoryfields";
import { ImageFields } from "./imagefields";
import { VariantFields } from "./variantfields";


export enum ProductFieldsPackageFormatEnum {
    Box = "box",
    Cylinder = "cylinder"
}

export enum ProductFieldsStatusEnum {
    Available = "available",
    NotAvailable = "not-available",
    Disabled = "disabled"
}


export class ProductFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=barcode" })
  barcode?: string;

  @SpeakeasyMetadata({ data: "json, name=categories", elemType: CategoryFields })
  categories?: CategoryFields[];

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=diameter" })
  diameter?: number;

  @SpeakeasyMetadata({ data: "json, name=discount" })
  discount?: number;

  @SpeakeasyMetadata({ data: "json, name=featured" })
  featured?: boolean;

  @SpeakeasyMetadata({ data: "json, name=google_product_category" })
  googleProductCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: ImageFields })
  images?: ImageFields[];

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=package_format" })
  packageFormat?: ProductFieldsPackageFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=permalink" })
  permalink?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ProductFieldsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=stock" })
  stock?: number;

  @SpeakeasyMetadata({ data: "json, name=stock_unlimited" })
  stockUnlimited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=variants", elemType: VariantFields })
  variants?: VariantFields[];

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
