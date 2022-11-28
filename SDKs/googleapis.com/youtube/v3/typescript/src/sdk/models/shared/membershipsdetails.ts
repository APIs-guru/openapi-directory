import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MembershipsDuration } from "./membershipsduration";
import { MembershipsDurationAtLevel } from "./membershipsdurationatlevel";



export class MembershipsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessibleLevels" })
  accessibleLevels?: string[];

  @SpeakeasyMetadata({ data: "json, name=highestAccessibleLevel" })
  highestAccessibleLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=highestAccessibleLevelDisplayName" })
  highestAccessibleLevelDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=membershipsDuration" })
  membershipsDuration?: MembershipsDuration;

  @SpeakeasyMetadata({ data: "json, name=membershipsDurationAtLevels", elemType: MembershipsDurationAtLevel })
  membershipsDurationAtLevels?: MembershipsDurationAtLevel[];
}
