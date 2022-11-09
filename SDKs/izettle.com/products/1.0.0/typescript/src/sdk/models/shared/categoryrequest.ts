import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoryDto } from "./categorydto";


export class CategoryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=categories", elemType: shared.CategoryDto })
  categories: CategoryDto[];
}
