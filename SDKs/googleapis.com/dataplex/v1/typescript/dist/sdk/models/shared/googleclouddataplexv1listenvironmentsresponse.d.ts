import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Environment } from "./googleclouddataplexv1environment";
/**
 * List environments response.
**/
export declare class GoogleCloudDataplexV1ListEnvironmentsResponse extends SpeakeasyBase {
    environments?: GoogleCloudDataplexV1Environment[];
    nextPageToken?: string;
}
