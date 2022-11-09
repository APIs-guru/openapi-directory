import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlbumInfo } from "./albuminfo";


export class AlbumInfoRemoteSearchQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=IncludeDisabledProviders" })
  includeDisabledProviders?: boolean;

  @Metadata({ data: "json, name=ItemId" })
  itemId?: string;

  @Metadata({ data: "json, name=SearchInfo" })
  searchInfo?: AlbumInfo;

  @Metadata({ data: "json, name=SearchProviderName" })
  searchProviderName?: string;
}
