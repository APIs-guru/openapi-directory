import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtistInfo } from "./artistinfo";



export class ArtistInfoRemoteSearchQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IncludeDisabledProviders" })
  includeDisabledProviders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ItemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=SearchInfo" })
  searchInfo?: ArtistInfo;

  @SpeakeasyMetadata({ data: "json, name=SearchProviderName" })
  searchProviderName?: string;
}
