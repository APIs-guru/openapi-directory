import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudChannelV1MediaTypeEnum {
    MediaTypeUnspecified = "MEDIA_TYPE_UNSPECIFIED",
    MediaTypeImage = "MEDIA_TYPE_IMAGE"
}
/**
 * Represents media information.
**/
export declare class GoogleCloudChannelV1Media extends SpeakeasyBase {
    content?: string;
    title?: string;
    type?: GoogleCloudChannelV1MediaTypeEnum;
}
