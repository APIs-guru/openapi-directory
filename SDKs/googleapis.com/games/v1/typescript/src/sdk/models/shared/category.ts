import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Category
/** 
 * Data related to individual game categories.
**/
export class Category extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=experiencePoints" })
  experiencePoints?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
