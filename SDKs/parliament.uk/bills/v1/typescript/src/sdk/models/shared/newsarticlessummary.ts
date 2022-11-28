import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NewsArticlesSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=displayDate" })
  displayDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
