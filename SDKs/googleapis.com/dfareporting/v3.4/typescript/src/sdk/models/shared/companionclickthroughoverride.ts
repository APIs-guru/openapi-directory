import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClickThroughUrl } from "./clickthroughurl";


// CompanionClickThroughOverride
/** 
 * Companion Click-through override.
**/
export class CompanionClickThroughOverride extends SpeakeasyBase {
  @Metadata({ data: "json, name=clickThroughUrl" })
  clickThroughUrl?: ClickThroughUrl;

  @Metadata({ data: "json, name=creativeId" })
  creativeId?: string;
}
