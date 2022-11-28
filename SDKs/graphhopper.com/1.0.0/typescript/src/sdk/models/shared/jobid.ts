import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JobId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=job_id" })
  jobId?: string;
}
