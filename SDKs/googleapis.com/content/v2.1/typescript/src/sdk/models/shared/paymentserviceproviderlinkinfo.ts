import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaymentServiceProviderLinkInfo
/** 
 * Additional information required for PAYMENT_SERVICE_PROVIDER link type.
**/
export class PaymentServiceProviderLinkInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalAccountBusinessCountry" })
  externalAccountBusinessCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=externalAccountId" })
  externalAccountId?: string;
}
