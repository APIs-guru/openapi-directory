import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";


export enum HiuHealthInformationRequestResponseHiRequestSessionStatusEnum {
    Requested = "REQUESTED",
    Acknowledged = "ACKNOWLEDGED"
}


export class HiuHealthInformationRequestResponseHiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessionStatus" })
  sessionStatus: HiuHealthInformationRequestResponseHiRequestSessionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId: string;
}


export class HiuHealthInformationRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=hiRequest" })
  hiRequest?: HiuHealthInformationRequestResponseHiRequest;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
