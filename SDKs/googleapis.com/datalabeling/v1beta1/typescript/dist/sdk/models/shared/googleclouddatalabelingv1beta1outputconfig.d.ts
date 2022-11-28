import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1GcsDestination } from "./googleclouddatalabelingv1beta1gcsdestination";
import { GoogleCloudDatalabelingV1beta1GcsFolderDestination } from "./googleclouddatalabelingv1beta1gcsfolderdestination";
/**
 * The configuration of output data.
**/
export declare class GoogleCloudDatalabelingV1beta1OutputConfig extends SpeakeasyBase {
    gcsDestination?: GoogleCloudDatalabelingV1beta1GcsDestination;
    gcsFolderDestination?: GoogleCloudDatalabelingV1beta1GcsFolderDestination;
}
