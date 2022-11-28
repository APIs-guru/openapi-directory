import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageFields } from "./imagefields";
import { ProductOptionVariantEdit } from "./productoptionvariantedit";



export class VariantFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ImageFields;

  @SpeakeasyMetadata({ data: "json, name=options", elemType: ProductOptionVariantEdit })
  options?: ProductOptionVariantEdit[];

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=stock" })
  stock?: number;

  @SpeakeasyMetadata({ data: "json, name=stock_unlimited" })
  stockUnlimited?: boolean;
}
