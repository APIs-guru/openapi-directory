import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductFields } from "./productfields";



export class Product extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: ProductFields;
}
