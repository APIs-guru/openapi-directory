import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SetLocationsRequest sets the locations of the cluster.
**/
export declare class SetLocationsRequest extends SpeakeasyBase {
    clusterId?: string;
    locations?: string[];
    name?: string;
    projectId?: string;
    zone?: string;
}
