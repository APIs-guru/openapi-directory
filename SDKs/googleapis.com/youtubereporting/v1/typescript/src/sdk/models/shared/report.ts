import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Report
/** 
 * A report's metadata including the URL from which the report itself can be downloaded.
**/
export class Report extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=jobExpireTime" })
  jobExpireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
