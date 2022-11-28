import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1beta1ServiceInstance } from "./googlecloudservicebrokerv1beta1serviceinstance";
/**
 * The response for the `ListServiceInstances()` method.
**/
export declare class GoogleCloudServicebrokerV1beta1ListServiceInstancesResponse extends SpeakeasyBase {
    description?: string;
    instances?: GoogleCloudServicebrokerV1beta1ServiceInstance[];
    nextPageToken?: string;
}
