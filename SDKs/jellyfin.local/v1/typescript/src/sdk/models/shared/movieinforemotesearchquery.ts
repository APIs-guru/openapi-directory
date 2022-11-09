import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MovieInfo } from "./movieinfo";


export class MovieInfoRemoteSearchQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=IncludeDisabledProviders" })
  includeDisabledProviders?: boolean;

  @Metadata({ data: "json, name=ItemId" })
  itemId?: string;

  @Metadata({ data: "json, name=SearchInfo" })
  searchInfo?: MovieInfo;

  @Metadata({ data: "json, name=SearchProviderName" })
  searchProviderName?: string;
}
