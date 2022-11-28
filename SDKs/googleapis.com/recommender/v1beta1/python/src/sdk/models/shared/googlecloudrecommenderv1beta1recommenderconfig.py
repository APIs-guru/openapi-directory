from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1RecommenderConfig:
    r"""GoogleCloudRecommenderV1beta1RecommenderConfig
    Configuration for a Recommender.
    """
    
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    recommender_generation_config: Optional[GoogleCloudRecommenderV1beta1RecommenderGenerationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommenderGenerationConfig') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1RecommenderConfigInput:
    r"""GoogleCloudRecommenderV1beta1RecommenderConfigInput
    Configuration for a Recommender.
    """
    
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    recommender_generation_config: Optional[GoogleCloudRecommenderV1beta1RecommenderGenerationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommenderGenerationConfig') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
