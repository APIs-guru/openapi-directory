import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerCategoryEditFields } from "./customercategoryeditfields";


export class CustomerCategoryEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: CustomerCategoryEditFields;
}
