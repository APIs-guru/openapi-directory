import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationMetadata } from "./googleclouddatalabelingv1beta1annotationmetadata";
import { GoogleCloudDatalabelingV1beta1AnnotationValue } from "./googleclouddatalabelingv1beta1annotationvalue";

export enum GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum {
    AnnotationSentimentUnspecified = "ANNOTATION_SENTIMENT_UNSPECIFIED"
,    Negative = "NEGATIVE"
,    Positive = "POSITIVE"
}

export enum GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum {
    AnnotationSourceUnspecified = "ANNOTATION_SOURCE_UNSPECIFIED"
,    Operator = "OPERATOR"
}


// GoogleCloudDatalabelingV1beta1Annotation
/** 
 * Annotation for Example. Each example may have one or more annotations. For example in image classification problem, each image might have one or more labels. We call labels binded with this image an Annotation.
**/
export class GoogleCloudDatalabelingV1beta1Annotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationMetadata" })
  annotationMetadata?: GoogleCloudDatalabelingV1beta1AnnotationMetadata;

  @Metadata({ data: "json, name=annotationSentiment" })
  annotationSentiment?: GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum;

  @Metadata({ data: "json, name=annotationSource" })
  annotationSource?: GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum;

  @Metadata({ data: "json, name=annotationValue" })
  annotationValue?: GoogleCloudDatalabelingV1beta1AnnotationValue;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
