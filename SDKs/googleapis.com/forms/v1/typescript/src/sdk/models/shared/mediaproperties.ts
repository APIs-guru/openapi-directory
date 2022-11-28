import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MediaPropertiesAlignmentEnum {
    AlignmentUnspecified = "ALIGNMENT_UNSPECIFIED",
    Left = "LEFT",
    Right = "RIGHT",
    Center = "CENTER"
}


// MediaProperties
/** 
 * Properties of the media.
**/
export class MediaProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alignment" })
  alignment?: MediaPropertiesAlignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
