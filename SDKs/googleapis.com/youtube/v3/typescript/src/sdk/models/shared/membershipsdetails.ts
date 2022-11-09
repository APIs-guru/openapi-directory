import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MembershipsDuration } from "./membershipsduration";
import { MembershipsDurationAtLevel } from "./membershipsdurationatlevel";


export class MembershipsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessibleLevels" })
  accessibleLevels?: string[];

  @Metadata({ data: "json, name=highestAccessibleLevel" })
  highestAccessibleLevel?: string;

  @Metadata({ data: "json, name=highestAccessibleLevelDisplayName" })
  highestAccessibleLevelDisplayName?: string;

  @Metadata({ data: "json, name=membershipsDuration" })
  membershipsDuration?: MembershipsDuration;

  @Metadata({ data: "json, name=membershipsDurationAtLevels", elemType: shared.MembershipsDurationAtLevel })
  membershipsDurationAtLevels?: MembershipsDurationAtLevel[];
}
