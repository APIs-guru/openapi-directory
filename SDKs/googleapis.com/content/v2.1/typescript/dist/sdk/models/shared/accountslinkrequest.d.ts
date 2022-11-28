import { SpeakeasyBase } from "../../../internal/utils";
import { ECommercePlatformLinkInfo } from "./ecommerceplatformlinkinfo";
import { PaymentServiceProviderLinkInfo } from "./paymentserviceproviderlinkinfo";
export declare class AccountsLinkRequest extends SpeakeasyBase {
    action?: string;
    eCommercePlatformLinkInfo?: ECommercePlatformLinkInfo;
    linkType?: string;
    linkedAccountId?: string;
    paymentServiceProviderLinkInfo?: PaymentServiceProviderLinkInfo;
    services?: string[];
}
