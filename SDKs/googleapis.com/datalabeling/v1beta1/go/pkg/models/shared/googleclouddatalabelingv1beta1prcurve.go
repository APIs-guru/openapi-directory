package shared



type GoogleCloudDatalabelingV1beta1PrCurve struct {
    AnnotationSpec *GoogleCloudDatalabelingV1beta1AnnotationSpec `json:"annotationSpec,omitempty"`
    AreaUnderCurve *float32 `json:"areaUnderCurve,omitempty"`
    ConfidenceMetricsEntries []GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry `json:"confidenceMetricsEntries,omitempty"`
    MeanAveragePrecision *float32 `json:"meanAveragePrecision,omitempty"`
    
}

