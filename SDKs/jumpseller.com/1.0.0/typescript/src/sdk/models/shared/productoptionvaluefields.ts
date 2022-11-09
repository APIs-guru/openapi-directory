import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductOption } from "./productoption";
import { Variant } from "./variant";


export class ProductOptionValueFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=product_option" })
  productOption?: ProductOption;

  @Metadata({ data: "json, name=variants", elemType: shared.Variant })
  variants?: Variant[];
}
