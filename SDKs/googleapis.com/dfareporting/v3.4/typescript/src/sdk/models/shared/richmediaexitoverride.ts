import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClickThroughUrl } from "./clickthroughurl";



// RichMediaExitOverride
/** 
 * Rich Media Exit Override.
**/
export class RichMediaExitOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clickThroughUrl" })
  clickThroughUrl?: ClickThroughUrl;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=exitId" })
  exitId?: string;
}
