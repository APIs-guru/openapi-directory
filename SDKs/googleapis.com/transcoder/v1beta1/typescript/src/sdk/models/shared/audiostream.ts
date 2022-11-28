import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioAtom } from "./audioatom";



// AudioStream
/** 
 * Audio stream resource.
**/
export class AudioStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bitrateBps" })
  bitrateBps?: number;

  @SpeakeasyMetadata({ data: "json, name=channelCount" })
  channelCount?: number;

  @SpeakeasyMetadata({ data: "json, name=channelLayout" })
  channelLayout?: string[];

  @SpeakeasyMetadata({ data: "json, name=codec" })
  codec?: string;

  @SpeakeasyMetadata({ data: "json, name=mapping", elemType: AudioAtom })
  mapping?: AudioAtom[];

  @SpeakeasyMetadata({ data: "json, name=sampleRateHertz" })
  sampleRateHertz?: number;
}
