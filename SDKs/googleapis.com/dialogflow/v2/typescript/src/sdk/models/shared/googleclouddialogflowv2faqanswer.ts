import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2FaqAnswer
/** 
 * Represents answer from "frequently asked questions".
**/
export class GoogleCloudDialogflowV2FaqAnswer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer" })
  answer?: string;

  @SpeakeasyMetadata({ data: "json, name=answerRecord" })
  answerRecord?: string;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=question" })
  question?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}
