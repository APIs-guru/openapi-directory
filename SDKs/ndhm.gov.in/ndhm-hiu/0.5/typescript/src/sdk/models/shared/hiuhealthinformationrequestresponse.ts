import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";

export enum HiuHealthInformationRequestResponseHiRequestSessionStatusEnum {
    Requested = "REQUESTED"
,    Acknowledged = "ACKNOWLEDGED"
}


export class HiuHealthInformationRequestResponseHiRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=sessionStatus" })
  sessionStatus: HiuHealthInformationRequestResponseHiRequestSessionStatusEnum;

  @Metadata({ data: "json, name=transactionId" })
  transactionId: string;
}


export class HiuHealthInformationRequestResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=hiRequest" })
  hiRequest?: HiuHealthInformationRequestResponseHiRequest;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
