import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AudioChannelInput
/** 
 * Identifies which input file, track, and channel should be used.
**/
export class AudioChannelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: number;

  @SpeakeasyMetadata({ data: "json, name=gainDb" })
  gainDb?: number;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=track" })
  track?: number;
}
