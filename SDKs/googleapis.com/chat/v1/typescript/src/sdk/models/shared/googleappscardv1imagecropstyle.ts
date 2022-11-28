import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAppsCardV1ImageCropStyleTypeEnum {
    ImageCropTypeUnspecified = "IMAGE_CROP_TYPE_UNSPECIFIED",
    Square = "SQUARE",
    Circle = "CIRCLE",
    RectangleCustom = "RECTANGLE_CUSTOM",
    Rectangle43 = "RECTANGLE_4_3"
}


// GoogleAppsCardV1ImageCropStyle
/** 
 * Represents the crop style applied to an image. For example, here's how to apply a 16 by 9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ```
**/
export class GoogleAppsCardV1ImageCropStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspectRatio" })
  aspectRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleAppsCardV1ImageCropStyleTypeEnum;
}
