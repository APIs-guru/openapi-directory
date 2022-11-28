import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1alpha1ServiceInstance } from "./googlecloudservicebrokerv1alpha1serviceinstance";
/**
 * The response for the `ListServiceInstances()` method.
**/
export declare class GoogleCloudServicebrokerV1alpha1ListServiceInstancesResponse extends SpeakeasyBase {
    description?: string;
    instances?: GoogleCloudServicebrokerV1alpha1ServiceInstance[];
    nextPageToken?: string;
}
