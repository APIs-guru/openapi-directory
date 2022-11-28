import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DlpJob } from "./googleprivacydlpv2dlpjob";



// GooglePrivacyDlpV2ListDlpJobsResponse
/** 
 * The response message for listing DLP jobs.
**/
export class GooglePrivacyDlpV2ListDlpJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: GooglePrivacyDlpV2DlpJob })
  jobs?: GooglePrivacyDlpV2DlpJob[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
