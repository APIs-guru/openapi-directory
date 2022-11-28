import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationMetadata } from "./googleclouddatalabelingv1beta1annotationmetadata";
import { GoogleCloudDatalabelingV1beta1AnnotationValue } from "./googleclouddatalabelingv1beta1annotationvalue";
export declare enum GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum {
    AnnotationSentimentUnspecified = "ANNOTATION_SENTIMENT_UNSPECIFIED",
    Negative = "NEGATIVE",
    Positive = "POSITIVE"
}
export declare enum GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum {
    AnnotationSourceUnspecified = "ANNOTATION_SOURCE_UNSPECIFIED",
    Operator = "OPERATOR"
}
/**
 * Annotation for Example. Each example may have one or more annotations. For example in image classification problem, each image might have one or more labels. We call labels binded with this image an Annotation.
**/
export declare class GoogleCloudDatalabelingV1beta1Annotation extends SpeakeasyBase {
    annotationMetadata?: GoogleCloudDatalabelingV1beta1AnnotationMetadata;
    annotationSentiment?: GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum;
    annotationSource?: GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum;
    annotationValue?: GoogleCloudDatalabelingV1beta1AnnotationValue;
    name?: string;
}
