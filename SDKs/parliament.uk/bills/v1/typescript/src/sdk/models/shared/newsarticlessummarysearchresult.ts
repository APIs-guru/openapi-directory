import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NewsArticlesSummary } from "./newsarticlessummary";



export class NewsArticlesSummarySearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: NewsArticlesSummary })
  items?: NewsArticlesSummary[];

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
