import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RunMobileFriendlyTestRequest
/** 
 * Mobile-friendly test request.
**/
export class RunMobileFriendlyTestRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestScreenshot" })
  requestScreenshot?: boolean;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
