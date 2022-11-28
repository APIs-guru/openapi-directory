import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";


export enum TabStopAlignmentEnum {
    TabStopAlignmentUnspecified = "TAB_STOP_ALIGNMENT_UNSPECIFIED",
    Start = "START",
    Center = "CENTER",
    End = "END"
}


// TabStop
/** 
 * A tab stop within a paragraph.
**/
export class TabStop extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alignment" })
  alignment?: TabStopAlignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: Dimension;
}
