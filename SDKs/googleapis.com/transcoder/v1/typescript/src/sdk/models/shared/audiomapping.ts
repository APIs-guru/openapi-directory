import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AudioMapping
/** 
 * The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
**/
export class AudioMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=atomKey" })
  atomKey?: string;

  @Metadata({ data: "json, name=gainDb" })
  gainDb?: number;

  @Metadata({ data: "json, name=inputChannel" })
  inputChannel?: number;

  @Metadata({ data: "json, name=inputKey" })
  inputKey?: string;

  @Metadata({ data: "json, name=inputTrack" })
  inputTrack?: number;

  @Metadata({ data: "json, name=outputChannel" })
  outputChannel?: number;
}
