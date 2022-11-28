import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRunV2RunJobRequest
/** 
 * Request message to create a new Execution of a Job.
**/
export class GoogleCloudRunV2RunJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
