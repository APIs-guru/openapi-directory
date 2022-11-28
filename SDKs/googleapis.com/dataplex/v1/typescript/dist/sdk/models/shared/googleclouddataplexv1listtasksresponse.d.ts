import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Task } from "./googleclouddataplexv1task";
/**
 * List tasks response.
**/
export declare class GoogleCloudDataplexV1ListTasksResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tasks?: GoogleCloudDataplexV1Task[];
    unreachableLocations?: string[];
}
