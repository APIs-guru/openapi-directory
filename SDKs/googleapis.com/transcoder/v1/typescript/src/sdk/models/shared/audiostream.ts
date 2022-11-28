import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioMapping } from "./audiomapping";



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

  @SpeakeasyMetadata({ data: "json, name=mapping", elemType: AudioMapping })
  mapping?: AudioMapping[];

  @SpeakeasyMetadata({ data: "json, name=sampleRateHertz" })
  sampleRateHertz?: number;
}
