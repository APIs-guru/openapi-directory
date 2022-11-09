import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Locale } from "./locale";
import { Orientation } from "./orientation";


// AndroidRuntimeConfiguration
/** 
 * Android configuration that can be selected at the time a test is run.
**/
export class AndroidRuntimeConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=locales", elemType: shared.Locale })
  locales?: Locale[];

  @Metadata({ data: "json, name=orientations", elemType: shared.Orientation })
  orientations?: Orientation[];
}
