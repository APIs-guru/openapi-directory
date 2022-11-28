import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Asset } from "./googleclouddataplexv1asset";
/**
 * List assets response.
**/
export declare class GoogleCloudDataplexV1ListAssetsResponse extends SpeakeasyBase {
    assets?: GoogleCloudDataplexV1Asset[];
    nextPageToken?: string;
}
