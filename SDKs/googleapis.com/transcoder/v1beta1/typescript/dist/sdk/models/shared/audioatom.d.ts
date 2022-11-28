import { SpeakeasyBase } from "../../../internal/utils";
import { AudioChannel } from "./audiochannel";
/**
 * The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.
**/
export declare class AudioAtom extends SpeakeasyBase {
    channels?: AudioChannel[];
    key?: string;
}
