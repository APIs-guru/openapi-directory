import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LayoutReferencePredefinedLayoutEnum {
    PredefinedLayoutUnspecified = "PREDEFINED_LAYOUT_UNSPECIFIED",
    Blank = "BLANK",
    CaptionOnly = "CAPTION_ONLY",
    Title = "TITLE",
    TitleAndBody = "TITLE_AND_BODY",
    TitleAndTwoColumns = "TITLE_AND_TWO_COLUMNS",
    TitleOnly = "TITLE_ONLY",
    SectionHeader = "SECTION_HEADER",
    SectionTitleAndDescription = "SECTION_TITLE_AND_DESCRIPTION",
    OneColumnText = "ONE_COLUMN_TEXT",
    MainPoint = "MAIN_POINT",
    BigNumber = "BIG_NUMBER"
}
/**
 * Slide layout reference. This may reference either: - A predefined layout - One of the layouts in the presentation.
**/
export declare class LayoutReference extends SpeakeasyBase {
    layoutId?: string;
    predefinedLayout?: LayoutReferencePredefinedLayoutEnum;
}
