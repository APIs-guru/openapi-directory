import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PersonLookupInfo } from "./personlookupinfo";



export class PersonLookupInfoRemoteSearchQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IncludeDisabledProviders" })
  includeDisabledProviders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ItemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=SearchInfo" })
  searchInfo?: PersonLookupInfo;

  @SpeakeasyMetadata({ data: "json, name=SearchProviderName" })
  searchProviderName?: string;
}
