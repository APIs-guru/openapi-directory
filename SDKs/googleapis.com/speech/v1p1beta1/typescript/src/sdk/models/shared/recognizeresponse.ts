import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SpeechRecognitionResult } from "./speechrecognitionresult";
import { SpeechAdaptationInfo } from "./speechadaptationinfo";



// RecognizeResponse
/** 
 * The only message returned to the client by the `Recognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages.
**/
export class RecognizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: SpeechRecognitionResult })
  results?: SpeechRecognitionResult[];

  @SpeakeasyMetadata({ data: "json, name=speechAdaptationInfo" })
  speechAdaptationInfo?: SpeechAdaptationInfo;

  @SpeakeasyMetadata({ data: "json, name=totalBilledTime" })
  totalBilledTime?: string;
}
