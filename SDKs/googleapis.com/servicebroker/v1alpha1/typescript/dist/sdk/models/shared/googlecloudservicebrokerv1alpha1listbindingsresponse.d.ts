import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1alpha1Binding } from "./googlecloudservicebrokerv1alpha1binding";
/**
 * The response for the `ListBindings()` method.
**/
export declare class GoogleCloudServicebrokerV1alpha1ListBindingsResponse extends SpeakeasyBase {
    bindings?: GoogleCloudServicebrokerV1alpha1Binding[];
    description?: string;
    nextPageToken?: string;
}
