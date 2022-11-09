import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtistInfo } from "./artistinfo";


export class ArtistInfoRemoteSearchQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=IncludeDisabledProviders" })
  includeDisabledProviders?: boolean;

  @Metadata({ data: "json, name=ItemId" })
  itemId?: string;

  @Metadata({ data: "json, name=SearchInfo" })
  searchInfo?: ArtistInfo;

  @Metadata({ data: "json, name=SearchProviderName" })
  searchProviderName?: string;
}
