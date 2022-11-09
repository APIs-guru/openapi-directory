import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LayoutReferencePredefinedLayoutEnum {
    PredefinedLayoutUnspecified = "PREDEFINED_LAYOUT_UNSPECIFIED"
,    Blank = "BLANK"
,    CaptionOnly = "CAPTION_ONLY"
,    Title = "TITLE"
,    TitleAndBody = "TITLE_AND_BODY"
,    TitleAndTwoColumns = "TITLE_AND_TWO_COLUMNS"
,    TitleOnly = "TITLE_ONLY"
,    SectionHeader = "SECTION_HEADER"
,    SectionTitleAndDescription = "SECTION_TITLE_AND_DESCRIPTION"
,    OneColumnText = "ONE_COLUMN_TEXT"
,    MainPoint = "MAIN_POINT"
,    BigNumber = "BIG_NUMBER"
}


// LayoutReference
/** 
 * Slide layout reference. This may reference either: - A predefined layout - One of the layouts in the presentation.
**/
export class LayoutReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=layoutId" })
  layoutId?: string;

  @Metadata({ data: "json, name=predefinedLayout" })
  predefinedLayout?: LayoutReferencePredefinedLayoutEnum;
}
