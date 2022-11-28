import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClickThroughUrl } from "./clickthroughurl";



// CompanionClickThroughOverride
/** 
 * Companion Click-through override.
**/
export class CompanionClickThroughOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clickThroughUrl" })
  clickThroughUrl?: ClickThroughUrl;

  @SpeakeasyMetadata({ data: "json, name=creativeId" })
  creativeId?: string;
}
