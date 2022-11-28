import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DlpJob } from "./googleprivacydlpv2dlpjob";
/**
 * The response message for listing DLP jobs.
**/
export declare class GooglePrivacyDlpV2ListDlpJobsResponse extends SpeakeasyBase {
    jobs?: GooglePrivacyDlpV2DlpJob[];
    nextPageToken?: string;
}
