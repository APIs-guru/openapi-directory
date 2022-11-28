import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MembershipsDuration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memberSince" })
  memberSince?: string;

  @SpeakeasyMetadata({ data: "json, name=memberTotalDurationMonths" })
  memberTotalDurationMonths?: number;
}
