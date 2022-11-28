import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Webfont } from "./webfont";



// WebfontList
/** 
 * Response containing the list of fonts currently served by the Google Fonts API.
**/
export class WebfontList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Webfont })
  items?: Webfont[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
