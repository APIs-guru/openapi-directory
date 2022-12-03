from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class GetRiskParameters200ApplicationJSON:
    risk_parameters: Optional[list[shared.RiskParameterV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('risk_parameters') }})
    

@dataclass
class GetRiskParametersResponse:
    content_type: str = field()
    status_code: int = field()
    get_risk_parameters_200_application_json_object: Optional[GetRiskParameters200ApplicationJSON] = field(default=None)
    
