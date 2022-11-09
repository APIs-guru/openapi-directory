import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AudioChannelInput } from "./audiochannelinput";


// AudioChannel
/** 
 * The audio channel.
**/
export class AudioChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputs", elemType: shared.AudioChannelInput })
  inputs?: AudioChannelInput[];
}
