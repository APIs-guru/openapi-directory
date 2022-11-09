import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductOptionValueEditFields } from "./productoptionvalueeditfields";


export class ProductOptionValueEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: ProductOptionValueEditFields;
}
