import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextMapping
/** 
 * The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.
**/
export class TextMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=atomKey" })
  atomKey?: string;

  @Metadata({ data: "json, name=inputKey" })
  inputKey?: string;

  @Metadata({ data: "json, name=inputTrack" })
  inputTrack?: number;
}
