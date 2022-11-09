import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DynamicLinkInfo } from "./dynamiclinkinfo";
import { Suffix } from "./suffix";


// CreateManagedShortLinkRequest
/** 
 * Request to create a managed Short Dynamic Link.
**/
export class CreateManagedShortLinkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamicLinkInfo" })
  dynamicLinkInfo?: DynamicLinkInfo;

  @Metadata({ data: "json, name=longDynamicLink" })
  longDynamicLink?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sdkVersion" })
  sdkVersion?: string;

  @Metadata({ data: "json, name=suffix" })
  suffix?: Suffix;
}
