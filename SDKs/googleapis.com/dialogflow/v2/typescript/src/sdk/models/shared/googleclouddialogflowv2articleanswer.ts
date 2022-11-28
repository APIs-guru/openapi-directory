import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2ArticleAnswer
/** 
 * Represents article answer.
**/
export class GoogleCloudDialogflowV2ArticleAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answerRecord" })
  answerRecord?: string;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=snippets" })
  snippets?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
