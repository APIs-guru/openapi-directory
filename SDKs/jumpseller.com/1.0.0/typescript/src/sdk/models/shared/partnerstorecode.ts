import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PartnerStoreCodeStore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;
}


export class PartnerStoreCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=store" })
  store?: PartnerStoreCodeStore;
}
