import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Content } from "./googleclouddataplexv1content";
/**
 * List content response.
**/
export declare class GoogleCloudDataplexV1ListContentResponse extends SpeakeasyBase {
    content?: GoogleCloudDataplexV1Content[];
    nextPageToken?: string;
}
