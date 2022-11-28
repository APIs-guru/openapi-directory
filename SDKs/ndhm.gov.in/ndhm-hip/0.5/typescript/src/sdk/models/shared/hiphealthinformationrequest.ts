import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Consent } from "./consent";
import { DateRange } from "./daterange";
import { KeyMaterial } from "./keymaterial";



export class HipHealthInformationRequestHiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consent" })
  consent: Consent;

  @SpeakeasyMetadata({ data: "json, name=dataPushUrl" })
  dataPushUrl: string;

  @SpeakeasyMetadata({ data: "json, name=dateRange" })
  dateRange: DateRange;

  @SpeakeasyMetadata({ data: "json, name=keyMaterial" })
  keyMaterial: KeyMaterial;
}


export class HipHealthInformationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hiRequest" })
  hiRequest: HipHealthInformationRequestHiRequest;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId: string;
}
