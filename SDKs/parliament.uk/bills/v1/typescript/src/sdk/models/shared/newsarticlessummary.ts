import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NewsArticlesSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=displayDate" })
  displayDate?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
