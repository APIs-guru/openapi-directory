import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductOptionValueFields } from "./productoptionvaluefields";


export class ProductOptionValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: ProductOptionValueFields;
}
