import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Page } from "./page";


// Page
/** 
 * Represents a documentation page. A page can contain subpages to represent nested documentation set structure.
**/
export class Page extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=subpages", elemType: shared.Page })
  subpages?: Page[];
}
