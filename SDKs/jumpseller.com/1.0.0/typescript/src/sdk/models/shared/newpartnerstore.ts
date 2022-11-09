import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NewPartnerStoreStore extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=email_partner" })
  emailPartner?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=redirect_url" })
  redirectUrl?: string;
}


export class NewPartnerStore extends SpeakeasyBase {
  @Metadata({ data: "json, name=store" })
  store?: NewPartnerStoreStore;
}
