import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1InputConfig } from "./googleclouddatalabelingv1beta1inputconfig";
/**
 * Request message for ImportData API.
**/
export declare class GoogleCloudDatalabelingV1beta1ImportDataRequest extends SpeakeasyBase {
    inputConfig?: GoogleCloudDatalabelingV1beta1InputConfig;
    userEmailAddress?: string;
}
