import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ECommercePlatformLinkInfo } from "./ecommerceplatformlinkinfo";
import { PaymentServiceProviderLinkInfo } from "./paymentserviceproviderlinkinfo";


export class AccountsLinkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=eCommercePlatformLinkInfo" })
  eCommercePlatformLinkInfo?: ECommercePlatformLinkInfo;

  @Metadata({ data: "json, name=linkType" })
  linkType?: string;

  @Metadata({ data: "json, name=linkedAccountId" })
  linkedAccountId?: string;

  @Metadata({ data: "json, name=paymentServiceProviderLinkInfo" })
  paymentServiceProviderLinkInfo?: PaymentServiceProviderLinkInfo;

  @Metadata({ data: "json, name=services" })
  services?: string[];
}
