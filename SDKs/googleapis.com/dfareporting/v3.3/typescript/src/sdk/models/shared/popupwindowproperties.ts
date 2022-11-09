import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Size } from "./size";
import { OffsetPosition } from "./offsetposition";

export enum PopupWindowPropertiesPositionTypeEnum {
    Center = "CENTER"
,    Coordinates = "COORDINATES"
}


// PopupWindowProperties
/** 
 * Popup Window Properties.
**/
export class PopupWindowProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimension" })
  dimension?: Size;

  @Metadata({ data: "json, name=offset" })
  offset?: OffsetPosition;

  @Metadata({ data: "json, name=positionType" })
  positionType?: PopupWindowPropertiesPositionTypeEnum;

  @Metadata({ data: "json, name=showAddressBar" })
  showAddressBar?: boolean;

  @Metadata({ data: "json, name=showMenuBar" })
  showMenuBar?: boolean;

  @Metadata({ data: "json, name=showScrollBar" })
  showScrollBar?: boolean;

  @Metadata({ data: "json, name=showStatusBar" })
  showStatusBar?: boolean;

  @Metadata({ data: "json, name=showToolBar" })
  showToolBar?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
