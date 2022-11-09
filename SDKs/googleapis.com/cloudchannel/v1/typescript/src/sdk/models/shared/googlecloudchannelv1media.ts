import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudChannelV1MediaTypeEnum {
    MediaTypeUnspecified = "MEDIA_TYPE_UNSPECIFIED"
,    MediaTypeImage = "MEDIA_TYPE_IMAGE"
}


// GoogleCloudChannelV1Media
/** 
 * Represents media information.
**/
export class GoogleCloudChannelV1Media extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudChannelV1MediaTypeEnum;
}
