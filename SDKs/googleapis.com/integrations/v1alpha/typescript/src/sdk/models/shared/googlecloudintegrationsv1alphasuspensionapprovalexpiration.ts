import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput
/** 
 * Expiration configs for the approval request.
**/
export class GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=liftWhenExpired" })
  liftWhenExpired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=remindTime" })
  remindTime?: string;
}


// GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration
/** 
 * Expiration configs for the approval request.
**/
export class GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=liftWhenExpired" })
  liftWhenExpired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=remindTime" })
  remindTime?: string;
}
