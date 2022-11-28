import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry } from "./googleclouddatalabelingv1beta1confidencemetricsentry";
export declare class GoogleCloudDatalabelingV1beta1PrCurve extends SpeakeasyBase {
    annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;
    areaUnderCurve?: number;
    confidenceMetricsEntries?: GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry[];
    meanAveragePrecision?: number;
}
