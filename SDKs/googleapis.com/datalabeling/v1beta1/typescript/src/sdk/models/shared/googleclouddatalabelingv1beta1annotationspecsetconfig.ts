import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig
/** 
 * Annotation spec set with the setting of allowing multi labels or not.
**/
export class GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowMultiLabel" })
  allowMultiLabel?: boolean;

  @Metadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;
}
