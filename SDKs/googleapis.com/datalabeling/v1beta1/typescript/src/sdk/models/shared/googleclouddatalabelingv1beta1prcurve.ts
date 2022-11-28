import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry } from "./googleclouddatalabelingv1beta1confidencemetricsentry";



export class GoogleCloudDatalabelingV1beta1PrCurve extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpec" })
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

  @SpeakeasyMetadata({ data: "json, name=areaUnderCurve" })
  areaUnderCurve?: number;

  @SpeakeasyMetadata({ data: "json, name=confidenceMetricsEntries", elemType: GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry })
  confidenceMetricsEntries?: GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry[];

  @SpeakeasyMetadata({ data: "json, name=meanAveragePrecision" })
  meanAveragePrecision?: number;
}
