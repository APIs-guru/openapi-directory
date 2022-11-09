import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MembershipsDuration extends SpeakeasyBase {
  @Metadata({ data: "json, name=memberSince" })
  memberSince?: string;

  @Metadata({ data: "json, name=memberTotalDurationMonths" })
  memberTotalDurationMonths?: number;
}
