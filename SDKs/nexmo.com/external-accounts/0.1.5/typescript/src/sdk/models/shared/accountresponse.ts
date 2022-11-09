import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AccountResponseProviderEnum {
    Messenger = "messenger"
,    ViberServiceMsg = "viber_service_msg"
,    Whatsapp = "whatsapp"
}


export class AccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;

  @Metadata({ data: "json, name=api_key" })
  apiKey: string;

  @Metadata({ data: "json, name=applications" })
  applications?: string[];

  @Metadata({ data: "json, name=external_id" })
  externalId: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=provider" })
  provider: AccountResponseProviderEnum;
}
