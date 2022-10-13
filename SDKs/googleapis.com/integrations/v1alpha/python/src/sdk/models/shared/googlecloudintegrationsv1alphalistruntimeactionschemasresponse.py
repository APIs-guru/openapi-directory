from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alpharuntimeactionschema


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    runtime_action_schemas: Optional[List[googlecloudintegrationsv1alpharuntimeactionschema.GoogleCloudIntegrationsV1alphaRuntimeActionSchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeActionSchemas' }})
    
