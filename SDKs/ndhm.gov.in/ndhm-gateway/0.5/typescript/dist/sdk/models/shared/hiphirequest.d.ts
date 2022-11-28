import { SpeakeasyBase } from "../../../internal/utils";
import { Consent } from "./consent";
import { DateRange } from "./daterange";
import { KeyMaterial } from "./keymaterial";
export declare class HiphiRequestHiRequest extends SpeakeasyBase {
    consent: Consent;
    dataPushUrl: string;
    dateRange: DateRange;
    keyMaterial: KeyMaterial;
}
export declare class HiphiRequest extends SpeakeasyBase {
    hiRequest: HiphiRequestHiRequest;
    requestId: string;
    timestamp: Date;
    transactionId: string;
}
