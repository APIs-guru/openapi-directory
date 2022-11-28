import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamicLinkInfo } from "./dynamiclinkinfo";
import { Suffix } from "./suffix";



// CreateShortDynamicLinkRequest
/** 
 * Request to create a short Dynamic Link.
**/
export class CreateShortDynamicLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicLinkInfo" })
  dynamicLinkInfo?: DynamicLinkInfo;

  @SpeakeasyMetadata({ data: "json, name=longDynamicLink" })
  longDynamicLink?: string;

  @SpeakeasyMetadata({ data: "json, name=sdkVersion" })
  sdkVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: Suffix;
}
