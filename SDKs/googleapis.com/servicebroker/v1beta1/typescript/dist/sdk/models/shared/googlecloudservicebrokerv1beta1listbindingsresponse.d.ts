import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1beta1Binding } from "./googlecloudservicebrokerv1beta1binding";
/**
 * The response for the `ListBindings()` method.
**/
export declare class GoogleCloudServicebrokerV1beta1ListBindingsResponse extends SpeakeasyBase {
    bindings?: GoogleCloudServicebrokerV1beta1Binding[];
    description?: string;
    nextPageToken?: string;
}
