import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Category
/** 
 * Data related to individual game categories.
**/
export class Category extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=experiencePoints" })
  experiencePoints?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
