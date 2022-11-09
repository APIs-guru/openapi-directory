import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview
/** 
 * Human Review information of the document.
**/
export class GoogleCloudDocumentaiV1beta3DocumentRevisionHumanReview extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=stateMessage" })
  stateMessage?: string;
}
