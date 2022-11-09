import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TextInput } from "./textinput";


// TextAtom
/** 
 * The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.
**/
export class TextAtom extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputs", elemType: shared.TextInput })
  inputs?: TextInput[];

  @Metadata({ data: "json, name=key" })
  key?: string;
}
