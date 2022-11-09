import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2ArticleAnswer
/** 
 * Represents article answer.
**/
export class GoogleCloudDialogflowV2ArticleAnswer extends SpeakeasyBase {
  @Metadata({ data: "json, name=answerRecord" })
  answerRecord?: string;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=snippets" })
  snippets?: string[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
