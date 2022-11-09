import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConsentAcknowledgementStatusEnum {
    Ok = "OK"
,    Unknown = "UNKNOWN"
}


export class ConsentAcknowledgement extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentId" })
  consentId: string;

  @Metadata({ data: "json, name=status" })
  status: ConsentAcknowledgementStatusEnum;
}
