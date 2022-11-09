import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoryFields } from "./categoryfields";

export enum ProductEditFieldsPackageFormatEnum {
    Box = "box"
,    Cylinder = "cylinder"
}

export enum ProductEditFieldsStatusEnum {
    Available = "available"
,    NotAvailable = "not-available"
,    Disabled = "disabled"
}


export class ProductEditFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=barcode" })
  barcode?: string;

  @Metadata({ data: "json, name=categories", elemType: shared.CategoryFields })
  categories?: CategoryFields[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=diameter" })
  diameter?: number;

  @Metadata({ data: "json, name=featured" })
  featured?: boolean;

  @Metadata({ data: "json, name=google_product_category" })
  googleProductCategory?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=length" })
  length?: number;

  @Metadata({ data: "json, name=meta_description" })
  metaDescription?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=package_format" })
  packageFormat?: ProductEditFieldsPackageFormatEnum;

  @Metadata({ data: "json, name=page_title" })
  pageTitle?: string;

  @Metadata({ data: "json, name=permalink" })
  permalink?: string;

  @Metadata({ data: "json, name=price" })
  price: number;

  @Metadata({ data: "json, name=shipping_required" })
  shippingRequired?: boolean;

  @Metadata({ data: "json, name=sku" })
  sku?: string;

  @Metadata({ data: "json, name=status" })
  status?: ProductEditFieldsStatusEnum;

  @Metadata({ data: "json, name=stock" })
  stock?: number;

  @Metadata({ data: "json, name=stock_unlimited" })
  stockUnlimited?: boolean;

  @Metadata({ data: "json, name=weight" })
  weight?: number;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
