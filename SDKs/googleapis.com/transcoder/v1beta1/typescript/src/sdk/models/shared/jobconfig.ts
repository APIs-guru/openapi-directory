import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdBreak } from "./adbreak";
import { EditAtom } from "./editatom";
import { ElementaryStream } from "./elementarystream";
import { Input } from "./input";
import { Manifest } from "./manifest";
import { MuxStream } from "./muxstream";
import { Output } from "./output";
import { Overlay } from "./overlay";
import { PubsubDestination } from "./pubsubdestination";
import { SpriteSheet } from "./spritesheet";



// JobConfig
/** 
 * Job configuration
**/
export class JobConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adBreaks", elemType: AdBreak })
  adBreaks?: AdBreak[];

  @SpeakeasyMetadata({ data: "json, name=editList", elemType: EditAtom })
  editList?: EditAtom[];

  @SpeakeasyMetadata({ data: "json, name=elementaryStreams", elemType: ElementaryStream })
  elementaryStreams?: ElementaryStream[];

  @SpeakeasyMetadata({ data: "json, name=inputs", elemType: Input })
  inputs?: Input[];

  @SpeakeasyMetadata({ data: "json, name=manifests", elemType: Manifest })
  manifests?: Manifest[];

  @SpeakeasyMetadata({ data: "json, name=muxStreams", elemType: MuxStream })
  muxStreams?: MuxStream[];

  @SpeakeasyMetadata({ data: "json, name=output" })
  output?: Output;

  @SpeakeasyMetadata({ data: "json, name=overlays", elemType: Overlay })
  overlays?: Overlay[];

  @SpeakeasyMetadata({ data: "json, name=pubsubDestination" })
  pubsubDestination?: PubsubDestination;

  @SpeakeasyMetadata({ data: "json, name=spriteSheets", elemType: SpriteSheet })
  spriteSheets?: SpriteSheet[];
}
