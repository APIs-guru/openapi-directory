import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";


export enum PatientCareContextLinkResponseAcknowledgementStatusEnum {
    Success = "SUCCESS"
}


export class PatientCareContextLinkResponseAcknowledgement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: PatientCareContextLinkResponseAcknowledgementStatusEnum;
}


export class PatientCareContextLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgement" })
  acknowledgement?: PatientCareContextLinkResponseAcknowledgement;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
