import { SpeakeasyBase } from "../../../internal/utils";
import { OverlayPosition } from "./overlayposition";
/**
 * The position of an embedded object such as a chart.
**/
export declare class EmbeddedObjectPosition extends SpeakeasyBase {
    newSheet?: boolean;
    overlayPosition?: OverlayPosition;
    sheetId?: number;
}
