import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview
/** 
 * Human Review information of the document.
**/
export class GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=stateMessage" })
  stateMessage?: string;
}
