import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HeldVoiceQueryCoveredDataEnum {
    CoveredDataUnspecified = "COVERED_DATA_UNSPECIFIED",
    TextMessages = "TEXT_MESSAGES",
    Voicemails = "VOICEMAILS",
    CallLogs = "CALL_LOGS"
}
/**
 * Options for Voice holds.
**/
export declare class HeldVoiceQuery extends SpeakeasyBase {
    coveredData?: HeldVoiceQueryCoveredDataEnum[];
}
