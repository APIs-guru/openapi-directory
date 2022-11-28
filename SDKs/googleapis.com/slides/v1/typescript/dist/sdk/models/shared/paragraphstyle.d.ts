import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
export declare enum ParagraphStyleAlignmentEnum {
    AlignmentUnspecified = "ALIGNMENT_UNSPECIFIED",
    Start = "START",
    Center = "CENTER",
    End = "END",
    Justified = "JUSTIFIED"
}
export declare enum ParagraphStyleDirectionEnum {
    TextDirectionUnspecified = "TEXT_DIRECTION_UNSPECIFIED",
    LeftToRight = "LEFT_TO_RIGHT",
    RightToLeft = "RIGHT_TO_LEFT"
}
export declare enum ParagraphStyleSpacingModeEnum {
    SpacingModeUnspecified = "SPACING_MODE_UNSPECIFIED",
    NeverCollapse = "NEVER_COLLAPSE",
    CollapseLists = "COLLAPSE_LISTS"
}
/**
 * Styles that apply to a whole paragraph. If this text is contained in a shape with a parent placeholder, then these paragraph styles may be inherited from the parent. Which paragraph styles are inherited depend on the nesting level of lists: * A paragraph not in a list will inherit its paragraph style from the paragraph at the 0 nesting level of the list inside the parent placeholder. * A paragraph in a list will inherit its paragraph style from the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited paragraph styles are represented as unset fields in this message.
**/
export declare class ParagraphStyle extends SpeakeasyBase {
    alignment?: ParagraphStyleAlignmentEnum;
    direction?: ParagraphStyleDirectionEnum;
    indentEnd?: Dimension;
    indentFirstLine?: Dimension;
    indentStart?: Dimension;
    lineSpacing?: number;
    spaceAbove?: Dimension;
    spaceBelow?: Dimension;
    spacingMode?: ParagraphStyleSpacingModeEnum;
}
