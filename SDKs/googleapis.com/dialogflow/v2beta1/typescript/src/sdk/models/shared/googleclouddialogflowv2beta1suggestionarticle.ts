import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1SuggestionArticle
/** 
 * Represents suggested article.
**/
export class GoogleCloudDialogflowV2beta1SuggestionArticle extends SpeakeasyBase {
  @Metadata({ data: "json, name=answerRecord" })
  answerRecord?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=snippets" })
  snippets?: string[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
