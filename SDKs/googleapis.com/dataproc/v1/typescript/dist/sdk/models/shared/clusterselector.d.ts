import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A selector that chooses target cluster for jobs based on metadata.
**/
export declare class ClusterSelector extends SpeakeasyBase {
    clusterLabels?: Map<string, string>;
    zone?: string;
}
