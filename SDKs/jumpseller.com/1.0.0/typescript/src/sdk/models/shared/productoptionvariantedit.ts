import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductOptionVariantEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=product_option_id" })
  productOptionId?: number;

  @Metadata({ data: "json, name=product_option_position" })
  productOptionPosition?: number;

  @Metadata({ data: "json, name=product_option_value_id" })
  productOptionValueId?: number;

  @Metadata({ data: "json, name=product_value_position" })
  productValuePosition?: number;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
