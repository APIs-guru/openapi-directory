import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaymentServiceProviderLinkInfo
/** 
 * Additional information required for PAYMENT_SERVICE_PROVIDER link type.
**/
export class PaymentServiceProviderLinkInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalAccountBusinessCountry" })
  externalAccountBusinessCountry?: string;

  @Metadata({ data: "json, name=externalAccountId" })
  externalAccountId?: string;
}
