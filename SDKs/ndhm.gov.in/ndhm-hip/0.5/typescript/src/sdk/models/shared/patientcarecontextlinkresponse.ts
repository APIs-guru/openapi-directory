import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";

export enum PatientCareContextLinkResponseAcknowledgementStatusEnum {
    Success = "SUCCESS"
}


export class PatientCareContextLinkResponseAcknowledgement extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: PatientCareContextLinkResponseAcknowledgementStatusEnum;
}


export class PatientCareContextLinkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgement" })
  acknowledgement?: PatientCareContextLinkResponseAcknowledgement;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
