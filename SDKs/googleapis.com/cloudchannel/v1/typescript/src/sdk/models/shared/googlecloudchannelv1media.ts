import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudChannelV1MediaTypeEnum {
    MediaTypeUnspecified = "MEDIA_TYPE_UNSPECIFIED",
    MediaTypeImage = "MEDIA_TYPE_IMAGE"
}


// GoogleCloudChannelV1Media
/** 
 * Represents media information.
**/
export class GoogleCloudChannelV1Media extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudChannelV1MediaTypeEnum;
}
