import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerCategoryFields } from "./customercategoryfields";



export class CustomerCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: CustomerCategoryFields;
}
