import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Version } from "./googlecloudmlv1version";
/**
 * Response message for the ListVersions method.
**/
export declare class GoogleCloudMlV1ListVersionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    versions?: GoogleCloudMlV1Version[];
}
