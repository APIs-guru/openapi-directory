import { SpeakeasyBase } from "../../../internal/utils";
import { Authority } from "./authority";
import { MembershipEndpoint } from "./membershipendpoint";
import { MembershipState } from "./membershipstate";
import { AuthorityInput } from "./authority";
import { MembershipEndpointInput } from "./membershipendpoint";
/**
 * Membership contains information about a member cluster.
**/
export declare class Membership extends SpeakeasyBase {
    authority?: Authority;
    createTime?: string;
    deleteTime?: string;
    description?: string;
    endpoint?: MembershipEndpoint;
    externalId?: string;
    labels?: Map<string, string>;
    lastConnectionTime?: string;
    name?: string;
    state?: MembershipState;
    uniqueId?: string;
    updateTime?: string;
}
/**
 * Membership contains information about a member cluster.
**/
export declare class MembershipInput extends SpeakeasyBase {
    authority?: AuthorityInput;
    endpoint?: MembershipEndpointInput;
    externalId?: string;
    labels?: Map<string, string>;
}
