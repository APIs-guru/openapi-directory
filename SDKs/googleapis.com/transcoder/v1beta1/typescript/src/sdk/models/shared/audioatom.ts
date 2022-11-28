import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioChannel } from "./audiochannel";



// AudioAtom
/** 
 * The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
**/
export class AudioAtom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels", elemType: AudioChannel })
  channels?: AudioChannel[];

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
