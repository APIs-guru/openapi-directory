import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerCategoryEditFields } from "./customercategoryeditfields";



export class CustomerCategoryEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: CustomerCategoryEditFields;
}
