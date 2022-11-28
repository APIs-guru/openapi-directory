import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RunMobileFriendlyTestRequest
/** 
 * Mobile-friendly test request.
**/
export class RunMobileFriendlyTestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestScreenshot" })
  requestScreenshot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
