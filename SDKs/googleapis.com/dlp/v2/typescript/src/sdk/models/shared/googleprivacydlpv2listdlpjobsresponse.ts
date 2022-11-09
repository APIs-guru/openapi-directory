import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2DlpJob } from "./googleprivacydlpv2dlpjob";


// GooglePrivacyDlpV2ListDlpJobsResponse
/** 
 * The response message for listing DLP jobs.
**/
export class GooglePrivacyDlpV2ListDlpJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs", elemType: shared.GooglePrivacyDlpV2DlpJob })
  jobs?: GooglePrivacyDlpV2DlpJob[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
