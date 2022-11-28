import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConsentFetchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
