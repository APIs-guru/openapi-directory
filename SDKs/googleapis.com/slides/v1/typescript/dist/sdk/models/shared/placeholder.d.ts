import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlaceholderTypeEnum {
    None = "NONE",
    Body = "BODY",
    Chart = "CHART",
    ClipArt = "CLIP_ART",
    CenteredTitle = "CENTERED_TITLE",
    Diagram = "DIAGRAM",
    DateAndTime = "DATE_AND_TIME",
    Footer = "FOOTER",
    Header = "HEADER",
    Media = "MEDIA",
    Object = "OBJECT",
    Picture = "PICTURE",
    SlideNumber = "SLIDE_NUMBER",
    Subtitle = "SUBTITLE",
    Table = "TABLE",
    Title = "TITLE",
    SlideImage = "SLIDE_IMAGE"
}
/**
 * The placeholder information that uniquely identifies a placeholder shape.
**/
export declare class Placeholder extends SpeakeasyBase {
    index?: number;
    parentObjectId?: string;
    type?: PlaceholderTypeEnum;
}
