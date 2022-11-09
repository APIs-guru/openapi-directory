import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShareProfileAcknowledgement } from "./shareprofileacknowledgement";
import { Error } from "./error";
import { RequestReference } from "./requestreference";


export class ShareProfileResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgement" })
  acknowledgement: ShareProfileAcknowledgement;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=resp" })
  resp: RequestReference;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
