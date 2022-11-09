import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";

export enum HipHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum {
    Acknowledged = "ACKNOWLEDGED"
}


export class HipHealthInformationRequestAcknowledgementHiRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=sessionStatus" })
  sessionStatus: HipHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum;

  @Metadata({ data: "json, name=transactionId" })
  transactionId: string;
}


export class HipHealthInformationRequestAcknowledgement extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=hiRequest" })
  hiRequest?: HipHealthInformationRequestAcknowledgementHiRequest;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
