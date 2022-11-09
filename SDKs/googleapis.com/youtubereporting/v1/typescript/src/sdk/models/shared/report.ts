import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Report
/** 
 * A report's metadata including the URL from which the report itself can be downloaded.
**/
export class Report extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=jobExpireTime" })
  jobExpireTime?: string;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
