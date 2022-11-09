import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CategoryEditFields } from "./categoryeditfields";


export class CategoryEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: CategoryEditFields;
}
