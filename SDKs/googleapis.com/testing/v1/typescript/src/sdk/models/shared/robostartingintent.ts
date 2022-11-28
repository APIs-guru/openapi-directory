import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StartActivityIntent } from "./startactivityintent";



// RoboStartingIntent
/** 
 * Message for specifying the start activities to crawl.
**/
export class RoboStartingIntent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=launcherActivity" })
  launcherActivity?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=startActivity" })
  startActivity?: StartActivityIntent;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;
}
