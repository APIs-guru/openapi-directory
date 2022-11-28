import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Partition } from "./googleclouddataplexv1partition";
/**
 * List metadata partitions response.
**/
export declare class GoogleCloudDataplexV1ListPartitionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    partitions?: GoogleCloudDataplexV1Partition[];
}
