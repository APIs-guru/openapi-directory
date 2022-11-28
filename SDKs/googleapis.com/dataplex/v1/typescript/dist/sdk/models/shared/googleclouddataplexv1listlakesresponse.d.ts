import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Lake } from "./googleclouddataplexv1lake";
/**
 * List lakes response.
**/
export declare class GoogleCloudDataplexV1ListLakesResponse extends SpeakeasyBase {
    lakes?: GoogleCloudDataplexV1Lake[];
    nextPageToken?: string;
    unreachableLocations?: string[];
}
