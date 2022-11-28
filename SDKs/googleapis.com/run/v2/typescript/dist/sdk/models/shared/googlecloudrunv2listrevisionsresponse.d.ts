import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Revision } from "./googlecloudrunv2revision";
/**
 * Response message containing a list of Revisions.
**/
export declare class GoogleCloudRunV2ListRevisionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    revisions?: GoogleCloudRunV2Revision[];
}
