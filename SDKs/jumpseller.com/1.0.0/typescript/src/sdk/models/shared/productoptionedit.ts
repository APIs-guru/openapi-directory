import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductOptionEditFields } from "./productoptioneditfields";


export class ProductOptionEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=option" })
  option?: ProductOptionEditFields;
}
