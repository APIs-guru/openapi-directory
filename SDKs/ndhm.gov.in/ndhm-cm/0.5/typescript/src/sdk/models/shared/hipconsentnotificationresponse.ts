import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConsentAcknowledgement } from "./consentacknowledgement";
import { Error } from "./error";
import { RequestReference } from "./requestreference";


export class HipConsentNotificationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgement" })
  acknowledgement?: ConsentAcknowledgement;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
