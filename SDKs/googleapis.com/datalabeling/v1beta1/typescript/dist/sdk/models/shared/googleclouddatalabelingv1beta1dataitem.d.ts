import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1ImagePayload } from "./googleclouddatalabelingv1beta1imagepayload";
import { GoogleCloudDatalabelingV1beta1TextPayload } from "./googleclouddatalabelingv1beta1textpayload";
import { GoogleCloudDatalabelingV1beta1VideoPayload } from "./googleclouddatalabelingv1beta1videopayload";
/**
 * DataItem is a piece of data, without annotation. For example, an image.
**/
export declare class GoogleCloudDatalabelingV1beta1DataItem extends SpeakeasyBase {
    imagePayload?: GoogleCloudDatalabelingV1beta1ImagePayload;
    name?: string;
    textPayload?: GoogleCloudDatalabelingV1beta1TextPayload;
    videoPayload?: GoogleCloudDatalabelingV1beta1VideoPayload;
}
