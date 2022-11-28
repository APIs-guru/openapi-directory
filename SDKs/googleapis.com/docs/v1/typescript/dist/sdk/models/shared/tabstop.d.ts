import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
export declare enum TabStopAlignmentEnum {
    TabStopAlignmentUnspecified = "TAB_STOP_ALIGNMENT_UNSPECIFIED",
    Start = "START",
    Center = "CENTER",
    End = "END"
}
/**
 * A tab stop within a paragraph.
**/
export declare class TabStop extends SpeakeasyBase {
    alignment?: TabStopAlignmentEnum;
    offset?: Dimension;
}
