import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Error } from "./error";
import { RequestReference } from "./requestreference";


export class ConsentRequestInitResponseConsentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}


export class ConsentRequestInitResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentRequest" })
  consentRequest?: ConsentRequestInitResponseConsentRequest;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
