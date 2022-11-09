import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Locale } from "./locale";
import { Orientation } from "./orientation";


// IosRuntimeConfiguration
/** 
 * iOS configuration that can be selected at the time a test is run.
**/
export class IosRuntimeConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=locales", elemType: shared.Locale })
  locales?: Locale[];

  @Metadata({ data: "json, name=orientations", elemType: shared.Orientation })
  orientations?: Orientation[];
}
