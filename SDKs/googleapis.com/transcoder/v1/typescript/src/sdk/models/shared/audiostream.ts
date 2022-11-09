import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AudioMapping } from "./audiomapping";


// AudioStream
/** 
 * Audio stream resource.
**/
export class AudioStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=bitrateBps" })
  bitrateBps?: number;

  @Metadata({ data: "json, name=channelCount" })
  channelCount?: number;

  @Metadata({ data: "json, name=channelLayout" })
  channelLayout?: string[];

  @Metadata({ data: "json, name=codec" })
  codec?: string;

  @Metadata({ data: "json, name=mapping", elemType: shared.AudioMapping })
  mapping?: AudioMapping[];

  @Metadata({ data: "json, name=sampleRateHertz" })
  sampleRateHertz?: number;
}
