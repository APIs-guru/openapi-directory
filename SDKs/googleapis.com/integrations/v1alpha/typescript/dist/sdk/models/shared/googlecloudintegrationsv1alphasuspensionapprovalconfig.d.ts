import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput } from "./googlecloudintegrationsv1alphasuspensionapprovalexpiration";
import { GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration } from "./googlecloudintegrationsv1alphasuspensionapprovalexpiration";
/**
 * Configurations for approving the Suspension.
**/
export declare class GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput extends SpeakeasyBase {
    customMessage?: string;
    emailAddresses?: string[];
    expiration?: GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput;
}
/**
 * Configurations for approving the Suspension.
**/
export declare class GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig extends SpeakeasyBase {
    customMessage?: string;
    emailAddresses?: string[];
    expiration?: GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration;
}
