import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioChannelInput } from "./audiochannelinput";



// AudioChannel
/** 
 * The audio channel.
**/
export class AudioChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputs", elemType: AudioChannelInput })
  inputs?: AudioChannelInput[];
}
