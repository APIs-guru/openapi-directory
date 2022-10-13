package shared

type GoogleCloudDatalabelingV1beta1PrCurve struct {
	AnnotationSpec           *GoogleCloudDatalabelingV1beta1AnnotationSpec          `json:"annotationSpec"`
	AreaUnderCurve           *float32                                               `json:"areaUnderCurve"`
	ConfidenceMetricsEntries []GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry `json:"confidenceMetricsEntries"`
	MeanAveragePrecision     *float32                                               `json:"meanAveragePrecision"`
}
