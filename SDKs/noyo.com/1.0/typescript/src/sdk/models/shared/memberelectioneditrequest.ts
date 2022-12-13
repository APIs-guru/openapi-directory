import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MemberElectionEditRequestStatusEnum {
    Enrolling = "enrolling",
    Waiving = "waiving"
}


export class MemberElectionEditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=plan_id" })
  planId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: MemberElectionEditRequestStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume?: number;
}
