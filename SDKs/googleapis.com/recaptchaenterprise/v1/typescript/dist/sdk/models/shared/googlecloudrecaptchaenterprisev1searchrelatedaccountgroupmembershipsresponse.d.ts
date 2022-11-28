import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership } from "./googlecloudrecaptchaenterprisev1relatedaccountgroupmembership";
/**
 * The response to a `SearchRelatedAccountGroupMemberships` call.
**/
export declare class GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    relatedAccountGroupMemberships?: GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership[];
}
