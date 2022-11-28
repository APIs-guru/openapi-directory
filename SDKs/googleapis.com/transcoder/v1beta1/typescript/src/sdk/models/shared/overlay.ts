import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Animation } from "./animation";
import { Image } from "./image";



// Overlay
/** 
 * Overlay configuration.
**/
export class Overlay extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=animations", elemType: Animation })
  animations?: Animation[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;
}
