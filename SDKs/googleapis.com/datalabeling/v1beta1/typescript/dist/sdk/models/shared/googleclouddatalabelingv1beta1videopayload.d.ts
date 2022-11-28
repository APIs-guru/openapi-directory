import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1VideoThumbnail } from "./googleclouddatalabelingv1beta1videothumbnail";
/**
 * Container of information of a video.
**/
export declare class GoogleCloudDatalabelingV1beta1VideoPayload extends SpeakeasyBase {
    frameRate?: number;
    mimeType?: string;
    signedUri?: string;
    videoThumbnails?: GoogleCloudDatalabelingV1beta1VideoThumbnail[];
    videoUri?: string;
}
