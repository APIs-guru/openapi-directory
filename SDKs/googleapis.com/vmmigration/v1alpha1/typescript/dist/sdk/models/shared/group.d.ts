import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes message for 'Group' resource. The Group is a collections of several MigratingVms.
**/
export declare class Group extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    displayName?: string;
    name?: string;
    updateTime?: string;
}
/**
 * Describes message for 'Group' resource. The Group is a collections of several MigratingVms.
**/
export declare class GroupInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
}
