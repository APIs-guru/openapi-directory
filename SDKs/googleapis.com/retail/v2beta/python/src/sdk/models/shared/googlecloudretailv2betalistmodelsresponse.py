from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betamodel


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaListModelsResponse:
    models: Optional[List[googlecloudretailv2betamodel.GoogleCloudRetailV2betaModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'models' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
