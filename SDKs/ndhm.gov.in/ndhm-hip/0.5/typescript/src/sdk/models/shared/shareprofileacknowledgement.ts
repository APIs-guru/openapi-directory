import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ShareProfileAcknowledgementStatusEnum {
    Success = "SUCCESS"
,    Failure = "FAILURE"
}


export class ShareProfileAcknowledgement extends SpeakeasyBase {
  @Metadata({ data: "json, name=healthId" })
  healthId: string;

  @Metadata({ data: "json, name=status" })
  status: ShareProfileAcknowledgementStatusEnum;
}
