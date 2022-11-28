import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Locale } from "./locale";
import { Orientation } from "./orientation";



// IosRuntimeConfiguration
/** 
 * iOS configuration that can be selected at the time a test is run.
**/
export class IosRuntimeConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locales", elemType: Locale })
  locales?: Locale[];

  @SpeakeasyMetadata({ data: "json, name=orientations", elemType: Orientation })
  orientations?: Orientation[];
}
