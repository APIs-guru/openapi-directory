import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dimension } from "./dimension";

export enum TabStopAlignmentEnum {
    TabStopAlignmentUnspecified = "TAB_STOP_ALIGNMENT_UNSPECIFIED"
,    Start = "START"
,    Center = "CENTER"
,    End = "END"
}


// TabStop
/** 
 * A tab stop within a paragraph.
**/
export class TabStop extends SpeakeasyBase {
  @Metadata({ data: "json, name=alignment" })
  alignment?: TabStopAlignmentEnum;

  @Metadata({ data: "json, name=offset" })
  offset?: Dimension;
}
