import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParagraphBorder } from "./paragraphborder";
import { ParagraphBorder } from "./paragraphborder";
import { ParagraphBorder } from "./paragraphborder";
import { ParagraphBorder } from "./paragraphborder";
import { ParagraphBorder } from "./paragraphborder";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { Shading } from "./shading";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { TabStop } from "./tabstop";

export enum ParagraphStyleAlignmentEnum {
    AlignmentUnspecified = "ALIGNMENT_UNSPECIFIED"
,    Start = "START"
,    Center = "CENTER"
,    End = "END"
,    Justified = "JUSTIFIED"
}

export enum ParagraphStyleDirectionEnum {
    ContentDirectionUnspecified = "CONTENT_DIRECTION_UNSPECIFIED"
,    LeftToRight = "LEFT_TO_RIGHT"
,    RightToLeft = "RIGHT_TO_LEFT"
}

export enum ParagraphStyleNamedStyleTypeEnum {
    NamedStyleTypeUnspecified = "NAMED_STYLE_TYPE_UNSPECIFIED"
,    NormalText = "NORMAL_TEXT"
,    Title = "TITLE"
,    Subtitle = "SUBTITLE"
,    Heading1 = "HEADING_1"
,    Heading2 = "HEADING_2"
,    Heading3 = "HEADING_3"
,    Heading4 = "HEADING_4"
,    Heading5 = "HEADING_5"
,    Heading6 = "HEADING_6"
}

export enum ParagraphStyleSpacingModeEnum {
    SpacingModeUnspecified = "SPACING_MODE_UNSPECIFIED"
,    NeverCollapse = "NEVER_COLLAPSE"
,    CollapseLists = "COLLAPSE_LISTS"
}


// ParagraphStyle
/** 
 * Styles that apply to a whole paragraph. Inherited paragraph styles are represented as unset fields in this message. A paragraph style's parent depends on where the paragraph style is defined: * The ParagraphStyle on a Paragraph inherits from the paragraph's corresponding named style type. * The ParagraphStyle on a named style inherits from the normal text named style. * The ParagraphStyle of the normal text named style inherits from the default paragraph style in the Docs editor. * The ParagraphStyle on a Paragraph element that's contained in a table may inherit its paragraph style from the table style. If the paragraph style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
**/
export class ParagraphStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=alignment" })
  alignment?: ParagraphStyleAlignmentEnum;

  @Metadata({ data: "json, name=avoidWidowAndOrphan" })
  avoidWidowAndOrphan?: boolean;

  @Metadata({ data: "json, name=borderBetween" })
  borderBetween?: ParagraphBorder;

  @Metadata({ data: "json, name=borderBottom" })
  borderBottom?: ParagraphBorder;

  @Metadata({ data: "json, name=borderLeft" })
  borderLeft?: ParagraphBorder;

  @Metadata({ data: "json, name=borderRight" })
  borderRight?: ParagraphBorder;

  @Metadata({ data: "json, name=borderTop" })
  borderTop?: ParagraphBorder;

  @Metadata({ data: "json, name=direction" })
  direction?: ParagraphStyleDirectionEnum;

  @Metadata({ data: "json, name=headingId" })
  headingId?: string;

  @Metadata({ data: "json, name=indentEnd" })
  indentEnd?: Dimension;

  @Metadata({ data: "json, name=indentFirstLine" })
  indentFirstLine?: Dimension;

  @Metadata({ data: "json, name=indentStart" })
  indentStart?: Dimension;

  @Metadata({ data: "json, name=keepLinesTogether" })
  keepLinesTogether?: boolean;

  @Metadata({ data: "json, name=keepWithNext" })
  keepWithNext?: boolean;

  @Metadata({ data: "json, name=lineSpacing" })
  lineSpacing?: number;

  @Metadata({ data: "json, name=namedStyleType" })
  namedStyleType?: ParagraphStyleNamedStyleTypeEnum;

  @Metadata({ data: "json, name=pageBreakBefore" })
  pageBreakBefore?: boolean;

  @Metadata({ data: "json, name=shading" })
  shading?: Shading;

  @Metadata({ data: "json, name=spaceAbove" })
  spaceAbove?: Dimension;

  @Metadata({ data: "json, name=spaceBelow" })
  spaceBelow?: Dimension;

  @Metadata({ data: "json, name=spacingMode" })
  spacingMode?: ParagraphStyleSpacingModeEnum;

  @Metadata({ data: "json, name=tabStops", elemType: shared.TabStop })
  tabStops?: TabStop[];
}
