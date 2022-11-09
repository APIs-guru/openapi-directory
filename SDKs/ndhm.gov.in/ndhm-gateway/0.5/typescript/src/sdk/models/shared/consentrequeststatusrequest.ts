import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConsentRequestStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentRequestId" })
  consentRequestId: string;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
