import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CategoryFields } from "./categoryfields";


export class Category extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: CategoryFields;
}
