import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup } from "./googlecloudrecaptchaenterprisev1relatedaccountgroup";
/**
 * The response to a `ListRelatedAccountGroups` call.
**/
export declare class GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    relatedAccountGroups?: GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup[];
}
