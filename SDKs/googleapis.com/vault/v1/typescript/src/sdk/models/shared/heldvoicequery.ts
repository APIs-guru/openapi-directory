import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HeldVoiceQueryCoveredDataEnum {
    CoveredDataUnspecified = "COVERED_DATA_UNSPECIFIED",
    TextMessages = "TEXT_MESSAGES",
    Voicemails = "VOICEMAILS",
    CallLogs = "CALL_LOGS"
}


// HeldVoiceQuery
/** 
 * Options for Voice holds.
**/
export class HeldVoiceQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coveredData" })
  coveredData?: HeldVoiceQueryCoveredDataEnum[];
}
