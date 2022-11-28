import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1AnnotationBoundary
/** 
 * A point in a conversation that marks the start or the end of an annotation.
**/
export class GoogleCloudContactcenterinsightsV1AnnotationBoundary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transcriptIndex" })
  transcriptIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=wordIndex" })
  wordIndex?: number;
}
