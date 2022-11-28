import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1Key } from "./googlecloudrecaptchaenterprisev1key";
/**
 * Response to request to list keys in a project.
**/
export declare class GoogleCloudRecaptchaenterpriseV1ListKeysResponse extends SpeakeasyBase {
    keys?: GoogleCloudRecaptchaenterpriseV1Key[];
    nextPageToken?: string;
}
