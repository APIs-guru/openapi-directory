import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountResponseProviderEnum {
    Messenger = "messenger",
    ViberServiceMsg = "viber_service_msg",
    Whatsapp = "whatsapp"
}
export declare class AccountResponse extends SpeakeasyBase {
    accessToken?: string;
    apiKey: string;
    applications?: string[];
    externalId: string;
    name?: string;
    provider: AccountResponseProviderEnum;
}
