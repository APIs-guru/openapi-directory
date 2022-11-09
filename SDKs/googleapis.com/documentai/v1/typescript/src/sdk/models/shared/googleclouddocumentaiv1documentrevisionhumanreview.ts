import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1DocumentRevisionHumanReview
/** 
 * Human Review information of the document.
**/
export class GoogleCloudDocumentaiV1DocumentRevisionHumanReview extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=stateMessage" })
  stateMessage?: string;
}
