import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParagraphBorder } from "./paragraphborder";
import { Dimension } from "./dimension";
import { Shading } from "./shading";
import { TabStop } from "./tabstop";


export enum ParagraphStyleAlignmentEnum {
    AlignmentUnspecified = "ALIGNMENT_UNSPECIFIED",
    Start = "START",
    Center = "CENTER",
    End = "END",
    Justified = "JUSTIFIED"
}

export enum ParagraphStyleDirectionEnum {
    ContentDirectionUnspecified = "CONTENT_DIRECTION_UNSPECIFIED",
    LeftToRight = "LEFT_TO_RIGHT",
    RightToLeft = "RIGHT_TO_LEFT"
}

export enum ParagraphStyleNamedStyleTypeEnum {
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

export enum ParagraphStyleSpacingModeEnum {
    SpacingModeUnspecified = "SPACING_MODE_UNSPECIFIED",
    NeverCollapse = "NEVER_COLLAPSE",
    CollapseLists = "COLLAPSE_LISTS"
}


// ParagraphStyle
/** 
 * Styles that apply to a whole paragraph. Inherited paragraph styles are represented as unset fields in this message. A paragraph style's parent depends on where the paragraph style is defined: * The ParagraphStyle on a Paragraph inherits from the paragraph's corresponding named style type. * The ParagraphStyle on a named style inherits from the normal text named style. * The ParagraphStyle of the normal text named style inherits from the default paragraph style in the Docs editor. * The ParagraphStyle on a Paragraph element that's contained in a table may inherit its paragraph style from the table style. If the paragraph style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
**/
export class ParagraphStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alignment" })
  alignment?: ParagraphStyleAlignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=avoidWidowAndOrphan" })
  avoidWidowAndOrphan?: boolean;

  @SpeakeasyMetadata({ data: "json, name=borderBetween" })
  borderBetween?: ParagraphBorder;

  @SpeakeasyMetadata({ data: "json, name=borderBottom" })
  borderBottom?: ParagraphBorder;

  @SpeakeasyMetadata({ data: "json, name=borderLeft" })
  borderLeft?: ParagraphBorder;

  @SpeakeasyMetadata({ data: "json, name=borderRight" })
  borderRight?: ParagraphBorder;

  @SpeakeasyMetadata({ data: "json, name=borderTop" })
  borderTop?: ParagraphBorder;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: ParagraphStyleDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=headingId" })
  headingId?: string;

  @SpeakeasyMetadata({ data: "json, name=indentEnd" })
  indentEnd?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=indentFirstLine" })
  indentFirstLine?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=indentStart" })
  indentStart?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=keepLinesTogether" })
  keepLinesTogether?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keepWithNext" })
  keepWithNext?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lineSpacing" })
  lineSpacing?: number;

  @SpeakeasyMetadata({ data: "json, name=namedStyleType" })
  namedStyleType?: ParagraphStyleNamedStyleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=pageBreakBefore" })
  pageBreakBefore?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shading" })
  shading?: Shading;

  @SpeakeasyMetadata({ data: "json, name=spaceAbove" })
  spaceAbove?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=spaceBelow" })
  spaceBelow?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=spacingMode" })
  spacingMode?: ParagraphStyleSpacingModeEnum;

  @SpeakeasyMetadata({ data: "json, name=tabStops", elemType: TabStop })
  tabStops?: TabStop[];
}
