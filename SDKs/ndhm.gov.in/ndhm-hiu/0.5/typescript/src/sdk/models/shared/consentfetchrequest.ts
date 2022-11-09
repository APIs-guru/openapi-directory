import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConsentFetchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentId" })
  consentId: string;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
