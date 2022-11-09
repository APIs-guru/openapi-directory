import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerCategoryFields } from "./customercategoryfields";


export class CustomerCategory extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: CustomerCategoryFields;
}
