from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1annotationspec
from . import googleclouddatalabelingv1beta1confidencemetricsentry


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1PrCurve:
    annotation_spec: Optional[googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpec' }})
    area_under_curve: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'areaUnderCurve' }})
    confidence_metrics_entries: Optional[List[googleclouddatalabelingv1beta1confidencemetricsentry.GoogleCloudDatalabelingV1beta1ConfidenceMetricsEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidenceMetricsEntries' }})
    mean_average_precision: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meanAveragePrecision' }})
    
