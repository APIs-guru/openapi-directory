import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";


export enum ParagraphStyleAlignmentEnum {
    AlignmentUnspecified = "ALIGNMENT_UNSPECIFIED",
    Start = "START",
    Center = "CENTER",
    End = "END",
    Justified = "JUSTIFIED"
}

export enum ParagraphStyleDirectionEnum {
    TextDirectionUnspecified = "TEXT_DIRECTION_UNSPECIFIED",
    LeftToRight = "LEFT_TO_RIGHT",
    RightToLeft = "RIGHT_TO_LEFT"
}

export enum ParagraphStyleSpacingModeEnum {
    SpacingModeUnspecified = "SPACING_MODE_UNSPECIFIED",
    NeverCollapse = "NEVER_COLLAPSE",
    CollapseLists = "COLLAPSE_LISTS"
}


// ParagraphStyle
/** 
 * Styles that apply to a whole paragraph. If this text is contained in a shape with a parent placeholder, then these paragraph styles may be inherited from the parent. Which paragraph styles are inherited depend on the nesting level of lists: * A paragraph not in a list will inherit its paragraph style from the paragraph at the 0 nesting level of the list inside the parent placeholder. * A paragraph in a list will inherit its paragraph style from the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited paragraph styles are represented as unset fields in this message.
**/
export class ParagraphStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alignment" })
  alignment?: ParagraphStyleAlignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: ParagraphStyleDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=indentEnd" })
  indentEnd?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=indentFirstLine" })
  indentFirstLine?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=indentStart" })
  indentStart?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=lineSpacing" })
  lineSpacing?: number;

  @SpeakeasyMetadata({ data: "json, name=spaceAbove" })
  spaceAbove?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=spaceBelow" })
  spaceBelow?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=spacingMode" })
  spacingMode?: ParagraphStyleSpacingModeEnum;
}
