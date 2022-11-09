import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum VoiceOptionsCoveredDataEnum {
    CoveredDataUnspecified = "COVERED_DATA_UNSPECIFIED",
    TextMessages = "TEXT_MESSAGES",
    Voicemails = "VOICEMAILS",
    CallLogs = "CALL_LOGS"
}
/**
 * Additional options for Voice search
**/
export declare class VoiceOptions extends SpeakeasyBase {
    coveredData?: VoiceOptionsCoveredDataEnum[];
}
