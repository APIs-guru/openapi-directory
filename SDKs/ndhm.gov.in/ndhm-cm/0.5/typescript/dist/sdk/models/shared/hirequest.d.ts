import { SpeakeasyBase } from "../../../internal/utils";
import { Consent } from "./consent";
import { DateRange } from "./daterange";
import { KeyMaterial } from "./keymaterial";
export declare class HiRequestHiRequest extends SpeakeasyBase {
    consent: Consent;
    dataPushUrl: string;
    dateRange: DateRange;
    keyMaterial: KeyMaterial;
}
export declare class HiRequest extends SpeakeasyBase {
    hiRequest: HiRequestHiRequest;
    requestId: string;
    timestamp: Date;
}
