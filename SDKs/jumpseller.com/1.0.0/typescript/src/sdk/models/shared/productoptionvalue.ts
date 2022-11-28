import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductOptionValueFields } from "./productoptionvaluefields";



export class ProductOptionValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: ProductOptionValueFields;
}
