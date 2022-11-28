import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryFields } from "./categoryfields";



export class Category extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: CategoryFields;
}
