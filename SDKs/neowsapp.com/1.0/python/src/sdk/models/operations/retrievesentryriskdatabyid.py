from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveSentryRiskDataByIDPathParams:
    asteroid_id: str = field(default=None, metadata={'path_param': { 'field_name': 'asteroid_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveSentryRiskDataByIDRequest:
    path_params: RetrieveSentryRiskDataByIDPathParams = field(default=None)
    

@dataclass
class RetrieveSentryRiskDataByIDResponse:
    content_type: str = field(default=None)
    sentry_impact_risk_object: Optional[shared.SentryImpactRiskObject] = field(default=None)
    status_code: int = field(default=None)
    
