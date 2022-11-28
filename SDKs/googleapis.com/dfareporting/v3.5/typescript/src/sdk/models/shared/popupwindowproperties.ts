import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";
import { OffsetPosition } from "./offsetposition";


export enum PopupWindowPropertiesPositionTypeEnum {
    Center = "CENTER",
    Coordinates = "COORDINATES"
}


// PopupWindowProperties
/** 
 * Popup Window Properties.
**/
export class PopupWindowProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: Size;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: OffsetPosition;

  @SpeakeasyMetadata({ data: "json, name=positionType" })
  positionType?: PopupWindowPropertiesPositionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=showAddressBar" })
  showAddressBar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showMenuBar" })
  showMenuBar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showScrollBar" })
  showScrollBar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showStatusBar" })
  showStatusBar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showToolBar" })
  showToolBar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
