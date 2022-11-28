import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig
/** 
 * Annotation spec set with the setting of allowing multi labels or not.
**/
export class GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowMultiLabel" })
  allowMultiLabel?: boolean;

  @SpeakeasyMetadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;
}
