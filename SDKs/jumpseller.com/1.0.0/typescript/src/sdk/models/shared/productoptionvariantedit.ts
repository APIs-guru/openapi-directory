import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductOptionVariantEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=product_option_id" })
  productOptionId?: number;

  @SpeakeasyMetadata({ data: "json, name=product_option_position" })
  productOptionPosition?: number;

  @SpeakeasyMetadata({ data: "json, name=product_option_value_id" })
  productOptionValueId?: number;

  @SpeakeasyMetadata({ data: "json, name=product_value_position" })
  productValuePosition?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
