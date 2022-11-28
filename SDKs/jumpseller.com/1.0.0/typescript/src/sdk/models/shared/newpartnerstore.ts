import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NewPartnerStoreStore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=email_partner" })
  emailPartner?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=redirect_url" })
  redirectUrl?: string;
}


export class NewPartnerStore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=store" })
  store?: NewPartnerStoreStore;
}
