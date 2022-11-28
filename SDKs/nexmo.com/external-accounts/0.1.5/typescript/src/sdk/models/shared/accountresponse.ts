import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccountResponseProviderEnum {
    Messenger = "messenger",
    ViberServiceMsg = "viber_service_msg",
    Whatsapp = "whatsapp"
}


export class AccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "json, name=applications" })
  applications?: string[];

  @SpeakeasyMetadata({ data: "json, name=external_id" })
  externalId: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: AccountResponseProviderEnum;
}
