import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConsentAcknowledgementStatusEnum {
    Ok = "OK",
    Unknown = "UNKNOWN"
}


export class ConsentAcknowledgement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ConsentAcknowledgementStatusEnum;
}
