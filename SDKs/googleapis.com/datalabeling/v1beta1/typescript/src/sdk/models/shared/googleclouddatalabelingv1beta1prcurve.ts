import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";
import { GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry } from "./googleclouddatalabelingv1beta1confidencemetricsentry";


export class GoogleCloudDatalabelingV1beta1PrCurve extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpec" })
  annotationSpec?: GoogleCloudDatalabelingV1beta1AnnotationSpec;

  @Metadata({ data: "json, name=areaUnderCurve" })
  areaUnderCurve?: number;

  @Metadata({ data: "json, name=confidenceMetricsEntries", elemType: shared.GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry })
  confidenceMetricsEntries?: GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry[];

  @Metadata({ data: "json, name=meanAveragePrecision" })
  meanAveragePrecision?: number;
}
