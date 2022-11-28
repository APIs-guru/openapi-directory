import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VoiceOptionsCoveredDataEnum {
    CoveredDataUnspecified = "COVERED_DATA_UNSPECIFIED",
    TextMessages = "TEXT_MESSAGES",
    Voicemails = "VOICEMAILS",
    CallLogs = "CALL_LOGS"
}


// VoiceOptions
/** 
 * Additional options for Voice search
**/
export class VoiceOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coveredData" })
  coveredData?: VoiceOptionsCoveredDataEnum[];
}
