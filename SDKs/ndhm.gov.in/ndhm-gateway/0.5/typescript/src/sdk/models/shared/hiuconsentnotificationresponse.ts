import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsentAcknowledgement } from "./consentacknowledgement";
import { Error } from "./error";
import { RequestReference } from "./requestreference";


export class HiuConsentNotificationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgement", elemType: shared.ConsentAcknowledgement })
  acknowledgement?: ConsentAcknowledgement[];

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
