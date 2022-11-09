import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=adBreaks", elemType: shared.AdBreak })
  adBreaks?: AdBreak[];

  @Metadata({ data: "json, name=editList", elemType: shared.EditAtom })
  editList?: EditAtom[];

  @Metadata({ data: "json, name=elementaryStreams", elemType: shared.ElementaryStream })
  elementaryStreams?: ElementaryStream[];

  @Metadata({ data: "json, name=inputs", elemType: shared.Input })
  inputs?: Input[];

  @Metadata({ data: "json, name=manifests", elemType: shared.Manifest })
  manifests?: Manifest[];

  @Metadata({ data: "json, name=muxStreams", elemType: shared.MuxStream })
  muxStreams?: MuxStream[];

  @Metadata({ data: "json, name=output" })
  output?: Output;

  @Metadata({ data: "json, name=overlays", elemType: shared.Overlay })
  overlays?: Overlay[];

  @Metadata({ data: "json, name=pubsubDestination" })
  pubsubDestination?: PubsubDestination;

  @Metadata({ data: "json, name=spriteSheets", elemType: shared.SpriteSheet })
  spriteSheets?: SpriteSheet[];
}
