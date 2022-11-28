import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2JobTrigger } from "./googleprivacydlpv2jobtrigger";
/**
 * Response message for ListJobTriggers.
**/
export declare class GooglePrivacyDlpV2ListJobTriggersResponse extends SpeakeasyBase {
    jobTriggers?: GooglePrivacyDlpV2JobTrigger[];
    nextPageToken?: string;
}
