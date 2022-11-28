import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=audio" })
  audio?: Audio;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: Color;

  @SpeakeasyMetadata({ data: "json, name=crop" })
  crop?: Crop;

  @SpeakeasyMetadata({ data: "json, name=deblock" })
  deblock?: Deblock;

  @SpeakeasyMetadata({ data: "json, name=denoise" })
  denoise?: Denoise;

  @SpeakeasyMetadata({ data: "json, name=pad" })
  pad?: Pad;
}
