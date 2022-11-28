import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoxSetInfo } from "./boxsetinfo";



export class BoxSetInfoRemoteSearchQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IncludeDisabledProviders" })
  includeDisabledProviders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ItemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=SearchInfo" })
  searchInfo?: BoxSetInfo;

  @SpeakeasyMetadata({ data: "json, name=SearchProviderName" })
  searchProviderName?: string;
}
