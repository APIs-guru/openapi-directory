import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";
import { Date } from "./date";
import { ReportStatus } from "./reportstatus";


// ReportMetadata
/** 
 * Report metadata.
**/
export class ReportMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=googleCloudStoragePath" })
  googleCloudStoragePath?: string;

  @Metadata({ data: "json, name=reportDataEndDate" })
  reportDataEndDate?: Date;

  @Metadata({ data: "json, name=reportDataStartDate" })
  reportDataStartDate?: Date;

  @Metadata({ data: "json, name=status" })
  status?: ReportStatus;
}
