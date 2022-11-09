import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BoxSetInfo } from "./boxsetinfo";


export class BoxSetInfoRemoteSearchQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=IncludeDisabledProviders" })
  includeDisabledProviders?: boolean;

  @Metadata({ data: "json, name=ItemId" })
  itemId?: string;

  @Metadata({ data: "json, name=SearchInfo" })
  searchInfo?: BoxSetInfo;

  @Metadata({ data: "json, name=SearchProviderName" })
  searchProviderName?: string;
}
