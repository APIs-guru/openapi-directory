import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Annotation } from "./googleclouddatalabelingv1beta1annotation";
import { GoogleCloudDatalabelingV1beta1ImagePayload } from "./googleclouddatalabelingv1beta1imagepayload";
import { GoogleCloudDatalabelingV1beta1TextPayload } from "./googleclouddatalabelingv1beta1textpayload";
import { GoogleCloudDatalabelingV1beta1VideoPayload } from "./googleclouddatalabelingv1beta1videopayload";
/**
 * An Example is a piece of data and its annotation. For example, an image with label "house".
**/
export declare class GoogleCloudDatalabelingV1beta1Example extends SpeakeasyBase {
    annotations?: GoogleCloudDatalabelingV1beta1Annotation[];
    imagePayload?: GoogleCloudDatalabelingV1beta1ImagePayload;
    name?: string;
    textPayload?: GoogleCloudDatalabelingV1beta1TextPayload;
    videoPayload?: GoogleCloudDatalabelingV1beta1VideoPayload;
}
