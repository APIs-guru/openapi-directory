import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AudioChannel } from "./audiochannel";


// AudioAtom
/** 
 * The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
**/
export class AudioAtom extends SpeakeasyBase {
  @Metadata({ data: "json, name=channels", elemType: shared.AudioChannel })
  channels?: AudioChannel[];

  @Metadata({ data: "json, name=key" })
  key?: string;
}
