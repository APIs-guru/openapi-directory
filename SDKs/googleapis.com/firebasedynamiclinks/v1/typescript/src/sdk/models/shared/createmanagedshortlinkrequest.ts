import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamicLinkInfo } from "./dynamiclinkinfo";
import { Suffix } from "./suffix";



// CreateManagedShortLinkRequest
/** 
 * Request to create a managed Short Dynamic Link.
**/
export class CreateManagedShortLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicLinkInfo" })
  dynamicLinkInfo?: DynamicLinkInfo;

  @SpeakeasyMetadata({ data: "json, name=longDynamicLink" })
  longDynamicLink?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sdkVersion" })
  sdkVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: Suffix;
}
