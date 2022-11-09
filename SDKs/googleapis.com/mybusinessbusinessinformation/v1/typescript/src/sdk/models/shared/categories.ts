import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Category } from "./category";
import { Category } from "./category";


// Categories
/** 
 * A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
**/
export class Categories extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalCategories", elemType: shared.Category })
  additionalCategories?: Category[];

  @Metadata({ data: "json, name=primaryCategory" })
  primaryCategory?: Category;
}
