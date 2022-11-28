import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryDto } from "./categorydto";



export class CategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: CategoryDto })
  categories: CategoryDto[];
}
