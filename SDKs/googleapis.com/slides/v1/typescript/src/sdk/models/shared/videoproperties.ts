import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Outline } from "./outline";


// VideoProperties
/** 
 * The properties of the Video.
**/
export class VideoProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoPlay" })
  autoPlay?: boolean;

  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=mute" })
  mute?: boolean;

  @Metadata({ data: "json, name=outline" })
  outline?: Outline;

  @Metadata({ data: "json, name=start" })
  start?: number;
}
