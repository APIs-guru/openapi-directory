from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveSentryRiskDataByIDPathParams:
    asteroid_id: str = field(metadata={'path_param': { 'field_name': 'asteroid_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveSentryRiskDataByIDRequest:
    path_params: RetrieveSentryRiskDataByIDPathParams = field()
    

@dataclass
class RetrieveSentryRiskDataByIDResponse:
    content_type: str = field()
    status_code: int = field()
    sentry_impact_risk_object: Optional[shared.SentryImpactRiskObject] = field(default=None)
    
