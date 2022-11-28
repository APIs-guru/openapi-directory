import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV2Constraint } from "./googlecloudorgpolicyv2constraint";
/**
 * The response returned from the ListConstraints method.
**/
export declare class GoogleCloudOrgpolicyV2ListConstraintsResponse extends SpeakeasyBase {
    constraints?: GoogleCloudOrgpolicyV2Constraint[];
    nextPageToken?: string;
}
