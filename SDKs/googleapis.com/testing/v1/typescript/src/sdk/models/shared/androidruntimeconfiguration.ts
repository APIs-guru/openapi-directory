import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Locale } from "./locale";
import { Orientation } from "./orientation";



// AndroidRuntimeConfiguration
/** 
 * Android configuration that can be selected at the time a test is run.
**/
export class AndroidRuntimeConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locales", elemType: Locale })
  locales?: Locale[];

  @SpeakeasyMetadata({ data: "json, name=orientations", elemType: Orientation })
  orientations?: Orientation[];
}
