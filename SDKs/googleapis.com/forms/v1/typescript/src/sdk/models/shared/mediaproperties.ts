import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MediaPropertiesAlignmentEnum {
    AlignmentUnspecified = "ALIGNMENT_UNSPECIFIED"
,    Left = "LEFT"
,    Right = "RIGHT"
,    Center = "CENTER"
}


// MediaProperties
/** 
 * Properties of the media.
**/
export class MediaProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=alignment" })
  alignment?: MediaPropertiesAlignmentEnum;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
