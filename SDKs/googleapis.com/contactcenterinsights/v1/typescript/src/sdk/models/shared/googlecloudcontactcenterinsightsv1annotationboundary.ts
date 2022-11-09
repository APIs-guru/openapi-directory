import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudContactcenterinsightsV1AnnotationBoundary
/** 
 * A point in a conversation that marks the start or the end of an annotation.
**/
export class GoogleCloudContactcenterinsightsV1AnnotationBoundary extends SpeakeasyBase {
  @Metadata({ data: "json, name=transcriptIndex" })
  transcriptIndex?: number;

  @Metadata({ data: "json, name=wordIndex" })
  wordIndex?: number;
}
