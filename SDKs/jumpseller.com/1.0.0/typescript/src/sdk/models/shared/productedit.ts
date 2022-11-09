import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductEditFields } from "./producteditfields";


export class ProductEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=product" })
  product?: ProductEditFields;
}
