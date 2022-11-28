from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PatchAutomationV4ActionsAppIDDefinitionIDUpdatePathParams:
    app_id: int = field(metadata={'path_param': { 'field_name': 'appId', 'style': 'simple', 'explode': False }})
    definition_id: str = field(metadata={'path_param': { 'field_name': 'definitionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchAutomationV4ActionsAppIDDefinitionIDUpdateSecurity:
    developer_hapikey: shared.SchemeDeveloperHapikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class PatchAutomationV4ActionsAppIDDefinitionIDUpdateRequest:
    path_params: PatchAutomationV4ActionsAppIDDefinitionIDUpdatePathParams = field()
    request: shared.ExtensionActionDefinitionPatch = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PatchAutomationV4ActionsAppIDDefinitionIDUpdateSecurity = field()
    

@dataclass
class PatchAutomationV4ActionsAppIDDefinitionIDUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    extension_action_definition: Optional[shared.ExtensionActionDefinition] = field(default=None)
    
