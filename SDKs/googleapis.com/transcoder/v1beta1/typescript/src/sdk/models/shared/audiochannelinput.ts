import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AudioChannelInput
/** 
 * Identifies which input file, track, and channel should be used.
**/
export class AudioChannelInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: number;

  @Metadata({ data: "json, name=gainDb" })
  gainDb?: number;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=track" })
  track?: number;
}
