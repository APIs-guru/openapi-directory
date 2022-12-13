import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MemberElectionResultMemberTypeEnum {
    Dependent = "dependent",
    Employee = "employee"
}

export enum MemberElectionResultStatusEnum {
    Enrolling = "enrolling",
    Waiving = "waiving"
}


export class MemberElectionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=member_id" })
  memberId: string;

  @SpeakeasyMetadata({ data: "json, name=member_type" })
  memberType: MemberElectionResultMemberTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified: number;

  @SpeakeasyMetadata({ data: "json, name=plan_id" })
  planId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: MemberElectionResultStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume?: number;
}
