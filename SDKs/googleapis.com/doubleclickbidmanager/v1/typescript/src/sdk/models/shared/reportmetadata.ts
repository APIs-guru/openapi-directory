import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportStatus } from "./reportstatus";



// ReportMetadata
/** 
 * Report metadata.
**/
export class ReportMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleCloudStoragePath" })
  googleCloudStoragePath?: string;

  @SpeakeasyMetadata({ data: "json, name=reportDataEndTimeMs" })
  reportDataEndTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=reportDataStartTimeMs" })
  reportDataStartTimeMs?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ReportStatus;
}
