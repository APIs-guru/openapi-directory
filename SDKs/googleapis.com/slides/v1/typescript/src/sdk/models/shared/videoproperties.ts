import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Outline } from "./outline";



// VideoProperties
/** 
 * The properties of the Video.
**/
export class VideoProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoPlay" })
  autoPlay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=mute" })
  mute?: boolean;

  @SpeakeasyMetadata({ data: "json, name=outline" })
  outline?: Outline;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;
}
