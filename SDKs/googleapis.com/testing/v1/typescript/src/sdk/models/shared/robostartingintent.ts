import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StartActivityIntent } from "./startactivityintent";


// RoboStartingIntent
/** 
 * Message for specifying the start activities to crawl.
**/
export class RoboStartingIntent extends SpeakeasyBase {
  @Metadata({ data: "json, name=launcherActivity" })
  launcherActivity?: Map<string, any>;

  @Metadata({ data: "json, name=startActivity" })
  startActivity?: StartActivityIntent;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;
}
