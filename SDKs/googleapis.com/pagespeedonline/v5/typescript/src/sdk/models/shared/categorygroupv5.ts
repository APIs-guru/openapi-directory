import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CategoryGroupV5
/** 
 * Message containing a category
**/
export class CategoryGroupV5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
