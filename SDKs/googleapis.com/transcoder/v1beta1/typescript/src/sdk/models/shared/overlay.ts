import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Animation } from "./animation";
import { Image } from "./image";


// Overlay
/** 
 * Overlay configuration.
**/
export class Overlay extends SpeakeasyBase {
  @Metadata({ data: "json, name=animations", elemType: shared.Animation })
  animations?: Animation[];

  @Metadata({ data: "json, name=image" })
  image?: Image;
}
