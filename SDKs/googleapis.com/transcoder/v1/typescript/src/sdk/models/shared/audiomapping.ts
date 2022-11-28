import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AudioMapping
/** 
 * The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
**/
export class AudioMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=atomKey" })
  atomKey?: string;

  @SpeakeasyMetadata({ data: "json, name=gainDb" })
  gainDb?: number;

  @SpeakeasyMetadata({ data: "json, name=inputChannel" })
  inputChannel?: number;

  @SpeakeasyMetadata({ data: "json, name=inputKey" })
  inputKey?: string;

  @SpeakeasyMetadata({ data: "json, name=inputTrack" })
  inputTrack?: number;

  @SpeakeasyMetadata({ data: "json, name=outputChannel" })
  outputChannel?: number;
}
