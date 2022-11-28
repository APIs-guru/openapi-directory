import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SpeechAdaptationInfo
/** 
 * Information on speech adaptation use in results
**/
export class SpeechAdaptationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adaptationTimeout" })
  adaptationTimeout?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timeoutMessage" })
  timeoutMessage?: string;
}
