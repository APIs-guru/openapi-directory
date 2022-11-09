import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportStatus } from "./reportstatus";


// ReportMetadata
/** 
 * Report metadata.
**/
export class ReportMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=googleCloudStoragePath" })
  googleCloudStoragePath?: string;

  @Metadata({ data: "json, name=reportDataEndTimeMs" })
  reportDataEndTimeMs?: string;

  @Metadata({ data: "json, name=reportDataStartTimeMs" })
  reportDataStartTimeMs?: string;

  @Metadata({ data: "json, name=status" })
  status?: ReportStatus;
}
