import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Category
/** 
 * The category to which the update belongs.
**/
export class Category extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
