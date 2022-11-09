import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DynamicLinkInfo } from "./dynamiclinkinfo";
import { Suffix } from "./suffix";


// CreateShortDynamicLinkRequest
/** 
 * Request to create a short Dynamic Link.
**/
export class CreateShortDynamicLinkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamicLinkInfo" })
  dynamicLinkInfo?: DynamicLinkInfo;

  @Metadata({ data: "json, name=longDynamicLink" })
  longDynamicLink?: string;

  @Metadata({ data: "json, name=sdkVersion" })
  sdkVersion?: string;

  @Metadata({ data: "json, name=suffix" })
  suffix?: Suffix;
}
