import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CategoryGroupV5
/** 
 * Message containing a category
**/
export class CategoryGroupV5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
