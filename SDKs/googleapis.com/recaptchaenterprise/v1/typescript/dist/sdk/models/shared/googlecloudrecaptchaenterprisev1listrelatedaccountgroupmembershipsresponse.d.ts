import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership } from "./googlecloudrecaptchaenterprisev1relatedaccountgroupmembership";
/**
 * The response to a `ListRelatedAccountGroupMemberships` call.
**/
export declare class GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    relatedAccountGroupMemberships?: GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership[];
}
