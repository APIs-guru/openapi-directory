import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductOptionValueEditFields } from "./productoptionvalueeditfields";



export class ProductOptionValueEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: ProductOptionValueEditFields;
}
