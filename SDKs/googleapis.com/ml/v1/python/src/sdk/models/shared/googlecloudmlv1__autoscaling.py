from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__metricspec


@dataclass_json
@dataclass
class GoogleCloudMlV1AutoScaling:
    max_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxNodes' }})
    metrics: Optional[List[googlecloudmlv1__metricspec.GoogleCloudMlV1MetricSpec]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    min_nodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minNodes' }})
    
