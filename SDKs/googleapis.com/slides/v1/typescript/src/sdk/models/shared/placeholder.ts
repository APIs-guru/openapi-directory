import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PlaceholderTypeEnum {
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


// Placeholder
/** 
 * The placeholder information that uniquely identifies a placeholder shape.
**/
export class Placeholder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=parentObjectId" })
  parentObjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PlaceholderTypeEnum;
}
