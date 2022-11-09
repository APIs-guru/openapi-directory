import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Webfont } from "./webfont";


// WebfontList
/** 
 * Response containing the list of fonts currently served by the Google Fonts API.
**/
export class WebfontList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Webfont })
  items?: Webfont[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
