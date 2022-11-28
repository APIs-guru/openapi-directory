import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV2CustomConstraint } from "./googlecloudorgpolicyv2customconstraint";
/**
 * The response returned from the ListCustomConstraints method. It will be empty if no `CustomConstraints` are set on the organization resource.
**/
export declare class GoogleCloudOrgpolicyV2ListCustomConstraintsResponse extends SpeakeasyBase {
    customConstraints?: GoogleCloudOrgpolicyV2CustomConstraint[];
    nextPageToken?: string;
}
