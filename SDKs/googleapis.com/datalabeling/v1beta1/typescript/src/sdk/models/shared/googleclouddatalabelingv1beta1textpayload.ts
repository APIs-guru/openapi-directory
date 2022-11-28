import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1TextPayload
/** 
 * Container of information about a piece of text.
**/
export class GoogleCloudDatalabelingV1beta1TextPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=textContent" })
  textContent?: string;
}
