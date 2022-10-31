from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteAdministrationPlanningLevelHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdministrationPlanningLevelRequest:
    headers: DeleteAdministrationPlanningLevelHeaders = field(default=None)
    

@dataclass
class DeleteAdministrationPlanningLevelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
