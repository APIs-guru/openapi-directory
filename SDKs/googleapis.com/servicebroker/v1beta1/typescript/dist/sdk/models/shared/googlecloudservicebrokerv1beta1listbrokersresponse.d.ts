import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1beta1Broker } from "./googlecloudservicebrokerv1beta1broker";
/**
 * The response for the `ListBrokers()` method.
**/
export declare class GoogleCloudServicebrokerV1beta1ListBrokersResponse extends SpeakeasyBase {
    brokers?: GoogleCloudServicebrokerV1beta1Broker[];
    nextPageToken?: string;
}
