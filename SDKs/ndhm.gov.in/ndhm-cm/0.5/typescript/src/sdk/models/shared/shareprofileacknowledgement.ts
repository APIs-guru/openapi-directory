import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ShareProfileAcknowledgementStatusEnum {
    Success = "SUCCESS",
    Failure = "FAILURE"
}


export class ShareProfileAcknowledgement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=healthId" })
  healthId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ShareProfileAcknowledgementStatusEnum;
}
