import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class JobId extends SpeakeasyBase {
  @Metadata({ data: "json, name=job_id" })
  jobId?: string;
}
