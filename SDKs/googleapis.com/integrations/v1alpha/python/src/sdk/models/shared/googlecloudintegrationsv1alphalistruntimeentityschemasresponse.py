from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudintegrationsv1alpharuntimeentityschema


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    runtime_entity_schemas: Optional[List[googlecloudintegrationsv1alpharuntimeentityschema.GoogleCloudIntegrationsV1alphaRuntimeEntitySchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimeEntitySchemas' }})
    
