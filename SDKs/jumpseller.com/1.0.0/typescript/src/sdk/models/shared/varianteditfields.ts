import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductOptionVariantEdit } from "./productoptionvariantedit";


export class VariantEditFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=image_id" })
  imageId?: number;

  @Metadata({ data: "json, name=options", elemType: shared.ProductOptionVariantEdit })
  options?: ProductOptionVariantEdit[];

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=sku" })
  sku?: string;

  @Metadata({ data: "json, name=stock" })
  stock?: number;

  @Metadata({ data: "json, name=stock_unlimited" })
  stockUnlimited?: boolean;
}
