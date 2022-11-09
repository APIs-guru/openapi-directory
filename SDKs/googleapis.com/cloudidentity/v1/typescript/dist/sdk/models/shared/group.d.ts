import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DynamicGroupMetadata } from "./dynamicgroupmetadata";
import { EntityKey } from "./entitykey";
/**
 * A group within the Cloud Identity Groups API. A `Group` is a collection of entities, where each entity is either a user, another group, or a service account.
**/
export declare class Group extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    displayName?: string;
    dynamicGroupMetadata?: DynamicGroupMetadata;
    groupKey?: EntityKey;
    labels?: Map<string, string>;
    name?: string;
    parent?: string;
    updateTime?: string;
}
