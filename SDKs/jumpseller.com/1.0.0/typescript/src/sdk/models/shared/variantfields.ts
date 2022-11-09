import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageFields } from "./imagefields";
import { ProductOptionVariantEdit } from "./productoptionvariantedit";


export class VariantFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=image" })
  image?: ImageFields;

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
