import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BookInfo } from "./bookinfo";


export class BookInfoRemoteSearchQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=IncludeDisabledProviders" })
  includeDisabledProviders?: boolean;

  @Metadata({ data: "json, name=ItemId" })
  itemId?: string;

  @Metadata({ data: "json, name=SearchInfo" })
  searchInfo?: BookInfo;

  @Metadata({ data: "json, name=SearchProviderName" })
  searchProviderName?: string;
}
