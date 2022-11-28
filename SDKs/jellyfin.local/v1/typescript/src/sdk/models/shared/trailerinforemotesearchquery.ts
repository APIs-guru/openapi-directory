import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrailerInfo } from "./trailerinfo";



export class TrailerInfoRemoteSearchQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IncludeDisabledProviders" })
  includeDisabledProviders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ItemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=SearchInfo" })
  searchInfo?: TrailerInfo;

  @SpeakeasyMetadata({ data: "json, name=SearchProviderName" })
  searchProviderName?: string;
}
