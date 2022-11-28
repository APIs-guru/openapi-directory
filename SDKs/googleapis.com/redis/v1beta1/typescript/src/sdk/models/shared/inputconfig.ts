import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcsSource } from "./gcssource";



// InputConfig
/** 
 * The input content
**/
export class InputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GcsSource;
}
