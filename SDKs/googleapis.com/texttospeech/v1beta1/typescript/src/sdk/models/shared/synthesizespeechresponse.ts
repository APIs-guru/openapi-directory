import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioConfig } from "./audioconfig";
import { Timepoint } from "./timepoint";



// SynthesizeSpeechResponse
/** 
 * The message returned to the client by the `SynthesizeSpeech` method.
**/
export class SynthesizeSpeechResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioConfig" })
  audioConfig?: AudioConfig;

  @SpeakeasyMetadata({ data: "json, name=audioContent" })
  audioContent?: string;

  @SpeakeasyMetadata({ data: "json, name=timepoints", elemType: Timepoint })
  timepoints?: Timepoint[];
}
