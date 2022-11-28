import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryEditFields } from "./categoryeditfields";



export class CategoryEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: CategoryEditFields;
}
