import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SeriesInfo } from "./seriesinfo";



export class SeriesInfoRemoteSearchQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IncludeDisabledProviders" })
  includeDisabledProviders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ItemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=SearchInfo" })
  searchInfo?: SeriesInfo;

  @SpeakeasyMetadata({ data: "json, name=SearchProviderName" })
  searchProviderName?: string;
}
