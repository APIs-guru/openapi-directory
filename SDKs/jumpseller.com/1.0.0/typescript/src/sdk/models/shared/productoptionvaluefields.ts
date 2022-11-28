import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductOption } from "./productoption";
import { Variant } from "./variant";



export class ProductOptionValueFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=product_option" })
  productOption?: ProductOption;

  @SpeakeasyMetadata({ data: "json, name=variants", elemType: Variant })
  variants?: Variant[];
}
