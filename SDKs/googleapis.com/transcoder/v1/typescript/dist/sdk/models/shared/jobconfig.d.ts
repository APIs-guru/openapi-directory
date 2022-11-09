import { SpeakeasyBase } from "../../../internal/utils/utils";
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
/**
 * Job configuration
**/
export declare class JobConfig extends SpeakeasyBase {
    adBreaks?: AdBreak[];
    editList?: EditAtom[];
    elementaryStreams?: ElementaryStream[];
    inputs?: Input[];
    manifests?: Manifest[];
    muxStreams?: MuxStream[];
    output?: Output;
    overlays?: Overlay[];
    pubsubDestination?: PubsubDestination;
    spriteSheets?: SpriteSheet[];
}
