import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PersonLookupInfo } from "./personlookupinfo";


export class PersonLookupInfoRemoteSearchQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=IncludeDisabledProviders" })
  includeDisabledProviders?: boolean;

  @Metadata({ data: "json, name=ItemId" })
  itemId?: string;

  @Metadata({ data: "json, name=SearchInfo" })
  searchInfo?: PersonLookupInfo;

  @Metadata({ data: "json, name=SearchProviderName" })
  searchProviderName?: string;
}
