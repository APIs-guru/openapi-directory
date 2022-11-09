import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAppsCardV1ImageCropStyleTypeEnum {
    ImageCropTypeUnspecified = "IMAGE_CROP_TYPE_UNSPECIFIED"
,    Square = "SQUARE"
,    Circle = "CIRCLE"
,    RectangleCustom = "RECTANGLE_CUSTOM"
,    Rectangle43 = "RECTANGLE_4_3"
}


// GoogleAppsCardV1ImageCropStyle
/** 
 * Represents the crop style applied to an image.
**/
export class GoogleAppsCardV1ImageCropStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=aspectRatio" })
  aspectRatio?: number;

  @Metadata({ data: "json, name=type" })
  type?: GoogleAppsCardV1ImageCropStyleTypeEnum;
}
