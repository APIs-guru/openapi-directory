import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LineStyleTypeEnum {
    LineDashTypeUnspecified = "LINE_DASH_TYPE_UNSPECIFIED",
    Invisible = "INVISIBLE",
    Custom = "CUSTOM",
    Solid = "SOLID",
    Dotted = "DOTTED",
    MediumDashed = "MEDIUM_DASHED",
    MediumDashedDotted = "MEDIUM_DASHED_DOTTED",
    LongDashed = "LONG_DASHED",
    LongDashedDotted = "LONG_DASHED_DOTTED"
}


// LineStyle
/** 
 * Properties that describe the style of a line.
**/
export class LineStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: LineStyleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
