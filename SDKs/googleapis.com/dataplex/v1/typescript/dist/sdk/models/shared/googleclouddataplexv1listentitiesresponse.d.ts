import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Entity } from "./googleclouddataplexv1entity";
/**
 * List metadata entities response.
**/
export declare class GoogleCloudDataplexV1ListEntitiesResponse extends SpeakeasyBase {
    entities?: GoogleCloudDataplexV1Entity[];
    nextPageToken?: string;
}
