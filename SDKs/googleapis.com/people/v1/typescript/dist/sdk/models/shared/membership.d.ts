import { SpeakeasyBase } from "../../../internal/utils";
import { ContactGroupMembershipInput } from "./contactgroupmembership";
import { DomainMembership } from "./domainmembership";
import { FieldMetadataInput } from "./fieldmetadata";
import { ContactGroupMembership } from "./contactgroupmembership";
import { FieldMetadata } from "./fieldmetadata";
/**
 * A person's membership in a group. Only contact group memberships can be modified.
**/
export declare class MembershipInput extends SpeakeasyBase {
    contactGroupMembership?: ContactGroupMembershipInput;
    domainMembership?: DomainMembership;
    metadata?: FieldMetadataInput;
}
/**
 * A person's membership in a group. Only contact group memberships can be modified.
**/
export declare class Membership extends SpeakeasyBase {
    contactGroupMembership?: ContactGroupMembership;
    domainMembership?: DomainMembership;
    metadata?: FieldMetadata;
}
