from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPluginsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPluginsRequest:
    security: GetPluginsSecurity = field()
    

@dataclass
class GetPluginsResponse:
    content_type: str = field()
    status_code: int = field()
    plugin_infos: Optional[List[shared.PluginInfo]] = field(default=None)
    
