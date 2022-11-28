import { SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";
import { OffsetPosition } from "./offsetposition";
export declare enum PopupWindowPropertiesPositionTypeEnum {
    Center = "CENTER",
    Coordinates = "COORDINATES"
}
/**
 * Popup Window Properties.
**/
export declare class PopupWindowProperties extends SpeakeasyBase {
    dimension?: Size;
    offset?: OffsetPosition;
    positionType?: PopupWindowPropertiesPositionTypeEnum;
    showAddressBar?: boolean;
    showMenuBar?: boolean;
    showScrollBar?: boolean;
    showStatusBar?: boolean;
    showToolBar?: boolean;
    title?: string;
}
