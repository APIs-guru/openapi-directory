import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductEditFields } from "./producteditfields";



export class ProductEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: ProductEditFields;
}
