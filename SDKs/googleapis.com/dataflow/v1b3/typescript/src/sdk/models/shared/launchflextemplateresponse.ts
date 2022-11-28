import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



// LaunchFlexTemplateResponse
/** 
 * Response to the request to launch a job from Flex Template.
**/
export class LaunchFlexTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=job" })
  job?: Job;
}
