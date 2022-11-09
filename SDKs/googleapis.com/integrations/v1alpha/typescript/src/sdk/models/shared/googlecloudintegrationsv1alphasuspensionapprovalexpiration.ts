import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration
/** 
 * Expiration configs for the approval request.
**/
export class GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration extends SpeakeasyBase {
  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=liftWhenExpired" })
  liftWhenExpired?: boolean;

  @Metadata({ data: "json, name=remindTime" })
  remindTime?: string;
}
