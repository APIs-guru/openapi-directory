import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MusicVideoInfo } from "./musicvideoinfo";


export class MusicVideoInfoRemoteSearchQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=IncludeDisabledProviders" })
  includeDisabledProviders?: boolean;

  @Metadata({ data: "json, name=ItemId" })
  itemId?: string;

  @Metadata({ data: "json, name=SearchInfo" })
  searchInfo?: MusicVideoInfo;

  @Metadata({ data: "json, name=SearchProviderName" })
  searchProviderName?: string;
}
