import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MediaPropertiesAlignmentEnum {
    AlignmentUnspecified = "ALIGNMENT_UNSPECIFIED",
    Left = "LEFT",
    Right = "RIGHT",
    Center = "CENTER"
}
/**
 * Properties of the media.
**/
export declare class MediaProperties extends SpeakeasyBase {
    alignment?: MediaPropertiesAlignmentEnum;
    width?: number;
}
