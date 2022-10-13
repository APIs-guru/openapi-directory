from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommenderv1beta1recommendergenerationconfig


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1RecommenderConfig:
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    recommender_generation_config: Optional[googlecloudrecommenderv1beta1recommendergenerationconfig.GoogleCloudRecommenderV1beta1RecommenderGenerationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommenderGenerationConfig' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
