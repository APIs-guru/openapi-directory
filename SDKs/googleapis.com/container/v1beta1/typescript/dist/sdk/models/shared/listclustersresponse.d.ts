import { SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";
/**
 * ListClustersResponse is the result of ListClustersRequest.
**/
export declare class ListClustersResponse extends SpeakeasyBase {
    clusters?: Cluster[];
    missingZones?: string[];
}
