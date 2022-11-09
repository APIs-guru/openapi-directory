import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductOptionFields } from "./productoptionfields";


export class ProductOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=option" })
  option?: ProductOptionFields;
}
