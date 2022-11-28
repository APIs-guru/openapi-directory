import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Example } from "./googleclouddatalabelingv1beta1example";
/**
 * Results of listing Examples in and annotated dataset.
**/
export declare class GoogleCloudDatalabelingV1beta1ListExamplesResponse extends SpeakeasyBase {
    examples?: GoogleCloudDatalabelingV1beta1Example[];
    nextPageToken?: string;
}
