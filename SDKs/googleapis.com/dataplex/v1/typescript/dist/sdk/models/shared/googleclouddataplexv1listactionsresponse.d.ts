import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Action } from "./googleclouddataplexv1action";
/**
 * List actions response.
**/
export declare class GoogleCloudDataplexV1ListActionsResponse extends SpeakeasyBase {
    actions?: GoogleCloudDataplexV1Action[];
    nextPageToken?: string;
}
