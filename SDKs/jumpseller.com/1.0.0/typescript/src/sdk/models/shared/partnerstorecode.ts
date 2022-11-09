import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PartnerStoreCodeStore extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;
}


export class PartnerStoreCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=store" })
  store?: PartnerStoreCodeStore;
}
