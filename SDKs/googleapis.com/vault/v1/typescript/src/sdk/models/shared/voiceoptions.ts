import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VoiceOptionsCoveredDataEnum {
    CoveredDataUnspecified = "COVERED_DATA_UNSPECIFIED"
,    TextMessages = "TEXT_MESSAGES"
,    Voicemails = "VOICEMAILS"
,    CallLogs = "CALL_LOGS"
}


// VoiceOptions
/** 
 * Additional options for Voice search
**/
export class VoiceOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=coveredData" })
  coveredData?: VoiceOptionsCoveredDataEnum[];
}
