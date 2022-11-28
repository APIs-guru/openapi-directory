import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";


export enum HipHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum {
    Acknowledged = "ACKNOWLEDGED"
}


export class HipHealthInformationRequestAcknowledgementHiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessionStatus" })
  sessionStatus: HipHealthInformationRequestAcknowledgementHiRequestSessionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId: string;
}


export class HipHealthInformationRequestAcknowledgement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=hiRequest" })
  hiRequest?: HipHealthInformationRequestAcknowledgementHiRequest;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
