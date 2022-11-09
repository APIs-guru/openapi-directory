import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";

export enum PatientSmsNotifcationResponseStatusEnum {
    Acknowledged = "ACKNOWLEDGED"
,    Errored = "ERRORED"
}


export class PatientSmsNotifcationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=status" })
  status?: PatientSmsNotifcationResponseStatusEnum;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
