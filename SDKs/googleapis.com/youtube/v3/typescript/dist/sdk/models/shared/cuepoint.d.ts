import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CuepointCueTypeEnum {
    CueTypeUnspecified = "cueTypeUnspecified",
    CueTypeAd = "cueTypeAd"
}
/**
 * Note that there may be a 5-second end-point resolution issue. For instance, if a cuepoint comes in for 22:03:27, we may stuff the cuepoint into 22:03:25 or 22:03:30, depending. This is an artifact of HLS.
**/
export declare class Cuepoint extends SpeakeasyBase {
    cueType?: CuepointCueTypeEnum;
    durationSecs?: number;
    etag?: string;
    id?: string;
    insertionOffsetTimeMs?: string;
    walltimeMs?: string;
}
