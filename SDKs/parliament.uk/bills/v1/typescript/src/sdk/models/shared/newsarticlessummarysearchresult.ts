import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NewsArticlesSummary } from "./newsarticlessummary";


export class NewsArticlesSummarySearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.NewsArticlesSummary })
  items?: NewsArticlesSummary[];

  @Metadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
