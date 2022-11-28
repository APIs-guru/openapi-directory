import { SpeakeasyBase } from "../../../internal/utils";
import { Consent } from "./consent";
import { DateRange } from "./daterange";
import { KeyMaterial } from "./keymaterial";
export declare class HipHealthInformationRequestHiRequest extends SpeakeasyBase {
    consent: Consent;
    dataPushUrl: string;
    dateRange: DateRange;
    keyMaterial: KeyMaterial;
}
export declare class HipHealthInformationRequest extends SpeakeasyBase {
    hiRequest: HipHealthInformationRequestHiRequest;
    requestId: string;
    timestamp: Date;
    transactionId: string;
}
