import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MemberElectionCreateRequestMemberTypeEnum {
    Dependent = "dependent",
    Employee = "employee"
}

export enum MemberElectionCreateRequestStatusEnum {
    Enrolling = "enrolling",
    Waiving = "waiving"
}


export class MemberElectionCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=member_id" })
  memberId: string;

  @SpeakeasyMetadata({ data: "json, name=member_type" })
  memberType: MemberElectionCreateRequestMemberTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: MemberElectionCreateRequestStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume?: number;
}
