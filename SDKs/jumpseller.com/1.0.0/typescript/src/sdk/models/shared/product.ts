import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductFields } from "./productfields";


export class Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=product" })
  product?: ProductFields;
}
