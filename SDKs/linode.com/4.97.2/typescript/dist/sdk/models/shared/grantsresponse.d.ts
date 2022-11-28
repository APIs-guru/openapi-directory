import { SpeakeasyBase } from "../../../internal/utils";
import { GrantInput } from "./grant";
import { Grant } from "./grant";
export declare enum GrantsResponseGlobalAccountAccessEnum {
    ReadOnly = "read_only",
    ReadWrite = "read_write"
}
/**
 * A structure containing the Account-level grants a User has.
 *
**/
export declare class GrantsResponseGlobal extends SpeakeasyBase {
    accountAccess?: GrantsResponseGlobalAccountAccessEnum;
    addDomains?: boolean;
    addImages?: boolean;
    addLinodes?: boolean;
    addLongview?: boolean;
    addNodebalancers?: boolean;
    addStackscripts?: boolean;
    addVolumes?: boolean;
    cancelAccount?: boolean;
    longviewSubscription?: boolean;
}
/**
 * A structure representing all grants a restricted User has on the Account. Not available for unrestricted users, as they have access to everything without grants. If retrieved from the `/profile/grants` endpoint, entities to which a User has no access will be omitted.
 *
**/
export declare class GrantsResponseInput extends SpeakeasyBase {
    domain?: GrantInput[];
    global?: GrantsResponseGlobal;
    image?: GrantInput[];
    linode?: GrantInput[];
    longview?: GrantInput[];
    nodebalancer?: GrantInput[];
    stackscript?: GrantInput[];
    volume?: GrantInput[];
}
/**
 * A structure representing all grants a restricted User has on the Account. Not available for unrestricted users, as they have access to everything without grants. If retrieved from the `/profile/grants` endpoint, entities to which a User has no access will be omitted.
 *
**/
export declare class GrantsResponse extends SpeakeasyBase {
    domain?: Grant[];
    global?: GrantsResponseGlobal;
    image?: Grant[];
    linode?: Grant[];
    longview?: Grant[];
    nodebalancer?: Grant[];
    stackscript?: Grant[];
    volume?: Grant[];
}
