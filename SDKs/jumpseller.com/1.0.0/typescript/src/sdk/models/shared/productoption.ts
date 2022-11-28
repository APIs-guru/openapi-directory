import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductOptionFields } from "./productoptionfields";



export class ProductOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=option" })
  option?: ProductOptionFields;
}
