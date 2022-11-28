import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2CompleteQueryResponseRecentSearchResult
/** 
 * Recent search of this user.
**/
export class GoogleCloudRetailV2CompleteQueryResponseRecentSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recentSearch" })
  recentSearch?: string;
}
