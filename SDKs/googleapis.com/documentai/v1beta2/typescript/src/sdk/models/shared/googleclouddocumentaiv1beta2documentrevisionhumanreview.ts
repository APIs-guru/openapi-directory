import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview
/** 
 * Human Review information of the document.
**/
export class GoogleCloudDocumentaiV1beta2DocumentRevisionHumanReview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=stateMessage" })
  stateMessage?: string;
}
