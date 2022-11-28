import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextMapping
/** 
 * The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.
**/
export class TextMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=atomKey" })
  atomKey?: string;

  @SpeakeasyMetadata({ data: "json, name=inputKey" })
  inputKey?: string;

  @SpeakeasyMetadata({ data: "json, name=inputTrack" })
  inputTrack?: number;
}
