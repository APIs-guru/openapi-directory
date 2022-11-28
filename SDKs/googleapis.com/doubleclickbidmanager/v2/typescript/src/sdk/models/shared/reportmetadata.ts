import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { ReportStatus } from "./reportstatus";



// ReportMetadata
/** 
 * Report metadata.
**/
export class ReportMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleCloudStoragePath" })
  googleCloudStoragePath?: string;

  @SpeakeasyMetadata({ data: "json, name=reportDataEndDate" })
  reportDataEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reportDataStartDate" })
  reportDataStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ReportStatus;
}
