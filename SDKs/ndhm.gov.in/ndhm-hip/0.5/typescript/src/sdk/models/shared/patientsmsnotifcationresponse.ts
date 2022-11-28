import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";


export enum PatientSmsNotifcationResponseStatusEnum {
    Acknowledged = "ACKNOWLEDGED",
    Errored = "ERRORED"
}


export class PatientSmsNotifcationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PatientSmsNotifcationResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
