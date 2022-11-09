import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SpeechRecognitionResult } from "./speechrecognitionresult";


// RecognizeResponse
/** 
 * The only message returned to the client by the `Recognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages.
**/
export class RecognizeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId?: string;

  @Metadata({ data: "json, name=results", elemType: shared.SpeechRecognitionResult })
  results?: SpeechRecognitionResult[];

  @Metadata({ data: "json, name=totalBilledTime" })
  totalBilledTime?: string;
}
