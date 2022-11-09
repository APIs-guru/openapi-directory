import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleAppsCardV1BorderStyle } from "./googleappscardv1borderstyle";
import { GoogleAppsCardV1GridItem } from "./googleappscardv1griditem";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";


// GoogleAppsCardV1Grid
/** 
 * Represents a Grid widget that displays items in a configurable grid layout.
**/
export class GoogleAppsCardV1Grid extends SpeakeasyBase {
  @Metadata({ data: "json, name=borderStyle" })
  borderStyle?: GoogleAppsCardV1BorderStyle;

  @Metadata({ data: "json, name=columnCount" })
  columnCount?: number;

  @Metadata({ data: "json, name=items", elemType: shared.GoogleAppsCardV1GridItem })
  items?: GoogleAppsCardV1GridItem[];

  @Metadata({ data: "json, name=onClick" })
  onClick?: GoogleAppsCardV1OnClick;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
