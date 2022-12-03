from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class GetCoverageParameters200ApplicationJSON:
    coverage_parameters: Optional[list[shared.CoverageParameterV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverage_parameters') }})
    

@dataclass
class GetCoverageParametersResponse:
    content_type: str = field()
    status_code: int = field()
    get_coverage_parameters_200_application_json_object: Optional[GetCoverageParameters200ApplicationJSON] = field(default=None)
    
