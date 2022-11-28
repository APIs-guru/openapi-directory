import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MembershipsDurationAtLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: string;

  @SpeakeasyMetadata({ data: "json, name=memberSince" })
  memberSince?: string;

  @SpeakeasyMetadata({ data: "json, name=memberTotalDurationMonths" })
  memberTotalDurationMonths?: number;
}
