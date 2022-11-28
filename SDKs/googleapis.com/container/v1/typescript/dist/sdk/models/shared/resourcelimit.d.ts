import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about amount of some resource in the cluster. For memory, value should be in GB.
**/
export declare class ResourceLimit extends SpeakeasyBase {
    maximum?: string;
    minimum?: string;
    resourceType?: string;
}
