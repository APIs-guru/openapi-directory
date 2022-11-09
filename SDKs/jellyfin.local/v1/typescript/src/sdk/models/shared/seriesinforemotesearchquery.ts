import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SeriesInfo } from "./seriesinfo";


export class SeriesInfoRemoteSearchQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=IncludeDisabledProviders" })
  includeDisabledProviders?: boolean;

  @Metadata({ data: "json, name=ItemId" })
  itemId?: string;

  @Metadata({ data: "json, name=SearchInfo" })
  searchInfo?: SeriesInfo;

  @Metadata({ data: "json, name=SearchProviderName" })
  searchProviderName?: string;
}
