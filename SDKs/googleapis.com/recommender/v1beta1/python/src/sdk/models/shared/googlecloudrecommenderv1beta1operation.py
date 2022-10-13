from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommenderv1beta1valuematcher
from . import googlecloudrecommenderv1beta1valuematcher


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1Operation:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    path_filters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pathFilters' }})
    path_value_matchers: Optional[dict[str, googlecloudrecommenderv1beta1valuematcher.GoogleCloudRecommenderV1beta1ValueMatcher]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pathValueMatchers' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    source_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourcePath' }})
    source_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceResource' }})
    value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    value_matcher: Optional[googlecloudrecommenderv1beta1valuematcher.GoogleCloudRecommenderV1beta1ValueMatcher] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueMatcher' }})
    
