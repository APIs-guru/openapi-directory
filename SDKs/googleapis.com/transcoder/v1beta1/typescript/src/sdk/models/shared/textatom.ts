import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextInput } from "./textinput";



// TextAtom
/** 
 * The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.
**/
export class TextAtom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputs", elemType: TextInput })
  inputs?: TextInput[];

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
