import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Session } from "./googleclouddataplexv1session";
/**
 * List sessions response.
**/
export declare class GoogleCloudDataplexV1ListSessionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sessions?: GoogleCloudDataplexV1Session[];
}
