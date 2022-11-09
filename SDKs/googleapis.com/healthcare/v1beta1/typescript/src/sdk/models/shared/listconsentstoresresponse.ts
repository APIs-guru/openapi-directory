import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsentStore } from "./consentstore";


export class ListConsentStoresResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentStores", elemType: shared.ConsentStore })
  consentStores?: ConsentStore[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
