import { SpeakeasyBase } from "../../../internal/utils";
import { ParagraphBorder } from "./paragraphborder";
import { Dimension } from "./dimension";
import { Shading } from "./shading";
import { TabStop } from "./tabstop";
export declare enum ParagraphStyleAlignmentEnum {
    AlignmentUnspecified = "ALIGNMENT_UNSPECIFIED",
    Start = "START",
    Center = "CENTER",
    End = "END",
    Justified = "JUSTIFIED"
}
export declare enum ParagraphStyleDirectionEnum {
    ContentDirectionUnspecified = "CONTENT_DIRECTION_UNSPECIFIED",
    LeftToRight = "LEFT_TO_RIGHT",
    RightToLeft = "RIGHT_TO_LEFT"
}
export declare enum ParagraphStyleNamedStyleTypeEnum {
    NamedStyleTypeUnspecified = "NAMED_STYLE_TYPE_UNSPECIFIED",
    NormalText = "NORMAL_TEXT",
    Title = "TITLE",
    Subtitle = "SUBTITLE",
    Heading1 = "HEADING_1",
    Heading2 = "HEADING_2",
    Heading3 = "HEADING_3",
    Heading4 = "HEADING_4",
    Heading5 = "HEADING_5",
    Heading6 = "HEADING_6"
}
export declare enum ParagraphStyleSpacingModeEnum {
    SpacingModeUnspecified = "SPACING_MODE_UNSPECIFIED",
    NeverCollapse = "NEVER_COLLAPSE",
    CollapseLists = "COLLAPSE_LISTS"
}
/**
 * Styles that apply to a whole paragraph. Inherited paragraph styles are represented as unset fields in this message. A paragraph style's parent depends on where the paragraph style is defined: * The ParagraphStyle on a Paragraph inherits from the paragraph's corresponding named style type. * The ParagraphStyle on a named style inherits from the normal text named style. * The ParagraphStyle of the normal text named style inherits from the default paragraph style in the Docs editor. * The ParagraphStyle on a Paragraph element that's contained in a table may inherit its paragraph style from the table style. If the paragraph style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
**/
export declare class ParagraphStyle extends SpeakeasyBase {
    alignment?: ParagraphStyleAlignmentEnum;
    avoidWidowAndOrphan?: boolean;
    borderBetween?: ParagraphBorder;
    borderBottom?: ParagraphBorder;
    borderLeft?: ParagraphBorder;
    borderRight?: ParagraphBorder;
    borderTop?: ParagraphBorder;
    direction?: ParagraphStyleDirectionEnum;
    headingId?: string;
    indentEnd?: Dimension;
    indentFirstLine?: Dimension;
    indentStart?: Dimension;
    keepLinesTogether?: boolean;
    keepWithNext?: boolean;
    lineSpacing?: number;
    namedStyleType?: ParagraphStyleNamedStyleTypeEnum;
    pageBreakBefore?: boolean;
    shading?: Shading;
    spaceAbove?: Dimension;
    spaceBelow?: Dimension;
    spacingMode?: ParagraphStyleSpacingModeEnum;
    tabStops?: TabStop[];
}
