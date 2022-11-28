import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsentStore } from "./consentstore";



export class ListConsentStoresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentStores", elemType: ConsentStore })
  consentStores?: ConsentStore[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
