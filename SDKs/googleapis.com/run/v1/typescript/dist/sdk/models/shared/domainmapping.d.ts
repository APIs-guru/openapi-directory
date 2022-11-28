import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { DomainMappingSpec } from "./domainmappingspec";
import { DomainMappingStatus } from "./domainmappingstatus";
/**
 * Resource to hold the state and status of a user's domain mapping. NOTE: This resource is currently in Beta.
**/
export declare class DomainMapping extends SpeakeasyBase {
    apiVersion?: string;
    kind?: string;
    metadata?: ObjectMeta;
    spec?: DomainMappingSpec;
    status?: DomainMappingStatus;
}
