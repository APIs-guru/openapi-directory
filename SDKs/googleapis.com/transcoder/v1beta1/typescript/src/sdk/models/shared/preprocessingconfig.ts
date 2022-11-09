import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Audio } from "./audio";
import { Color } from "./color";
import { Crop } from "./crop";
import { Deblock } from "./deblock";
import { Denoise } from "./denoise";
import { Pad } from "./pad";


// PreprocessingConfig
/** 
 * Preprocessing configurations.
**/
export class PreprocessingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=audio" })
  audio?: Audio;

  @Metadata({ data: "json, name=color" })
  color?: Color;

  @Metadata({ data: "json, name=crop" })
  crop?: Crop;

  @Metadata({ data: "json, name=deblock" })
  deblock?: Deblock;

  @Metadata({ data: "json, name=denoise" })
  denoise?: Denoise;

  @Metadata({ data: "json, name=pad" })
  pad?: Pad;
}
