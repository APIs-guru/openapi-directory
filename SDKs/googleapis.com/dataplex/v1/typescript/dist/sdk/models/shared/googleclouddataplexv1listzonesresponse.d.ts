import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Zone } from "./googleclouddataplexv1zone";
/**
 * List zones response.
**/
export declare class GoogleCloudDataplexV1ListZonesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    zones?: GoogleCloudDataplexV1Zone[];
}
