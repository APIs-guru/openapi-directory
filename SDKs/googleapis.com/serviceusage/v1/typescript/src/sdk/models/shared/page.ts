import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Page
/** 
 * Represents a documentation page. A page can contain subpages to represent nested documentation set structure.
**/
export class Page extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=subpages", elemType: Page })
  subpages?: Page[];
}
