import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Job } from "./job";


// LaunchTemplateResponse
/** 
 * Response to the request to launch a template.
**/
export class LaunchTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=job" })
  job?: Job;
}
