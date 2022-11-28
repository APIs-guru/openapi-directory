import { SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";
/**
 * Response message for BigtableInstanceAdmin.ListClusters.
**/
export declare class ListClustersResponse extends SpeakeasyBase {
    clusters?: Cluster[];
    failedLocations?: string[];
    nextPageToken?: string;
}
