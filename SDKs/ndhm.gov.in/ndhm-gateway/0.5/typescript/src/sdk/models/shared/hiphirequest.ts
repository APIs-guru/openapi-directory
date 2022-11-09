import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Consent } from "./consent";
import { DateRange } from "./daterange";
import { KeyMaterial } from "./keymaterial";


export class HiphiRequestHiRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consent" })
  consent: Consent;

  @Metadata({ data: "json, name=dataPushUrl" })
  dataPushUrl: string;

  @Metadata({ data: "json, name=dateRange" })
  dateRange: DateRange;

  @Metadata({ data: "json, name=keyMaterial" })
  keyMaterial: KeyMaterial;
}


export class HiphiRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=hiRequest" })
  hiRequest: HiphiRequestHiRequest;

  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @Metadata({ data: "json, name=transactionId" })
  transactionId: string;
}
