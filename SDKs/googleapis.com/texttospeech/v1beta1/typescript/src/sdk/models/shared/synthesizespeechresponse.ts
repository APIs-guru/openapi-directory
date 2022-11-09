import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AudioConfig } from "./audioconfig";
import { Timepoint } from "./timepoint";


// SynthesizeSpeechResponse
/** 
 * The message returned to the client by the `SynthesizeSpeech` method.
**/
export class SynthesizeSpeechResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioConfig" })
  audioConfig?: AudioConfig;

  @Metadata({ data: "json, name=audioContent" })
  audioContent?: string;

  @Metadata({ data: "json, name=timepoints", elemType: shared.Timepoint })
  timepoints?: Timepoint[];
}
