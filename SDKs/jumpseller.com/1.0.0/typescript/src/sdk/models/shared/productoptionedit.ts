import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductOptionEditFields } from "./productoptioneditfields";



export class ProductOptionEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=option" })
  option?: ProductOptionEditFields;
}
