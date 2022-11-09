import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration } from "./googlecloudintegrationsv1alphasuspensionapprovalexpiration";


// GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig
/** 
 * Configurations for approving the Suspension.
**/
export class GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=customMessage" })
  customMessage?: string;

  @Metadata({ data: "json, name=emailAddresses" })
  emailAddresses?: string[];

  @Metadata({ data: "json, name=expiration" })
  expiration?: GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration;
}
