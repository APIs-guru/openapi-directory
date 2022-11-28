import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConsentRequestStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentRequestId" })
  consentRequestId: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
