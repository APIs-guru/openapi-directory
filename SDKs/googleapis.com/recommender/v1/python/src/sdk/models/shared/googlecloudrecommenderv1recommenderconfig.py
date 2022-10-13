from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecommenderv1recommendergenerationconfig


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1RecommenderConfig:
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    recommender_generation_config: Optional[googlecloudrecommenderv1recommendergenerationconfig.GoogleCloudRecommenderV1RecommenderGenerationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommenderGenerationConfig' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
