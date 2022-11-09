import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HeldVoiceQueryCoveredDataEnum {
    CoveredDataUnspecified = "COVERED_DATA_UNSPECIFIED"
,    TextMessages = "TEXT_MESSAGES"
,    Voicemails = "VOICEMAILS"
,    CallLogs = "CALL_LOGS"
}


// HeldVoiceQuery
/** 
 * Options for Voice holds.
**/
export class HeldVoiceQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=coveredData" })
  coveredData?: HeldVoiceQueryCoveredDataEnum[];
}
