import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Job } from "./job";


// LaunchFlexTemplateResponse
/** 
 * Response to the request to launch a job from Flex Template.
**/
export class LaunchFlexTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=job" })
  job?: Job;
}
