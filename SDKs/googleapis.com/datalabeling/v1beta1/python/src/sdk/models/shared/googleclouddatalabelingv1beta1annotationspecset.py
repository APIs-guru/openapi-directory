from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1annotationspec


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1AnnotationSpecSet:
    annotation_specs: Optional[List[googleclouddatalabelingv1beta1annotationspec.GoogleCloudDatalabelingV1beta1AnnotationSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSpecs' }})
    blocking_resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockingResources' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
