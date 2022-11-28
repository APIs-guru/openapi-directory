import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryFields } from "./categoryfields";


export enum ProductEditFieldsPackageFormatEnum {
    Box = "box",
    Cylinder = "cylinder"
}

export enum ProductEditFieldsStatusEnum {
    Available = "available",
    NotAvailable = "not-available",
    Disabled = "disabled"
}


export class ProductEditFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=barcode" })
  barcode?: string;

  @SpeakeasyMetadata({ data: "json, name=categories", elemType: CategoryFields })
  categories?: CategoryFields[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=diameter" })
  diameter?: number;

  @SpeakeasyMetadata({ data: "json, name=featured" })
  featured?: boolean;

  @SpeakeasyMetadata({ data: "json, name=google_product_category" })
  googleProductCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=meta_description" })
  metaDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=package_format" })
  packageFormat?: ProductEditFieldsPackageFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=page_title" })
  pageTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=permalink" })
  permalink?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: number;

  @SpeakeasyMetadata({ data: "json, name=shipping_required" })
  shippingRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ProductEditFieldsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=stock" })
  stock?: number;

  @SpeakeasyMetadata({ data: "json, name=stock_unlimited" })
  stockUnlimited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
