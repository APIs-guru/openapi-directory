import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClickThroughUrl } from "./clickthroughurl";


// RichMediaExitOverride
/** 
 * Rich Media Exit Override.
**/
export class RichMediaExitOverride extends SpeakeasyBase {
  @Metadata({ data: "json, name=clickThroughUrl" })
  clickThroughUrl?: ClickThroughUrl;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=exitId" })
  exitId?: string;
}
