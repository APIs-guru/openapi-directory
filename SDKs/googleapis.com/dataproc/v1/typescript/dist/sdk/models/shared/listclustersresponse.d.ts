import { SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";
/**
 * The list of all clusters in a project.
**/
export declare class ListClustersResponse extends SpeakeasyBase {
    clusters?: Cluster[];
    nextPageToken?: string;
}
