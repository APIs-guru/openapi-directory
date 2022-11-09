import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Category
/** 
 * The category to which the update belongs.
**/
export class Category extends SpeakeasyBase {
  @Metadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
