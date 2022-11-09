import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRunV2RunJobRequest
/** 
 * Request message to create a new Execution of a Job.
**/
export class GoogleCloudRunV2RunJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
