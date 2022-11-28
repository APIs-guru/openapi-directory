import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipsDuration } from "./membershipsduration";
import { MembershipsDurationAtLevel } from "./membershipsdurationatlevel";
export declare class MembershipsDetails extends SpeakeasyBase {
    accessibleLevels?: string[];
    highestAccessibleLevel?: string;
    highestAccessibleLevelDisplayName?: string;
    membershipsDuration?: MembershipsDuration;
    membershipsDurationAtLevels?: MembershipsDurationAtLevel[];
}
