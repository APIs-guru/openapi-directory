import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ECommercePlatformLinkInfo } from "./ecommerceplatformlinkinfo";
import { PaymentServiceProviderLinkInfo } from "./paymentserviceproviderlinkinfo";



export class AccountsLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=eCommercePlatformLinkInfo" })
  eCommercePlatformLinkInfo?: ECommercePlatformLinkInfo;

  @SpeakeasyMetadata({ data: "json, name=linkType" })
  linkType?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedAccountId" })
  linkedAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentServiceProviderLinkInfo" })
  paymentServiceProviderLinkInfo?: PaymentServiceProviderLinkInfo;

  @SpeakeasyMetadata({ data: "json, name=services" })
  services?: string[];
}
