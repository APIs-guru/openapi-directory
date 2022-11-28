import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput } from "./googlecloudintegrationsv1alphasuspensionapprovalexpiration";
import { GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration } from "./googlecloudintegrationsv1alphasuspensionapprovalexpiration";



// GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput
/** 
 * Configurations for approving the Suspension.
**/
export class GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customMessage" })
  customMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddresses" })
  emailAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput;
}


// GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig
/** 
 * Configurations for approving the Suspension.
**/
export class GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customMessage" })
  customMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=emailAddresses" })
  emailAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration;
}
