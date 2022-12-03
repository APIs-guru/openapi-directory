from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RiskParameterV1:
    r"""RiskParameterV1
    Risk parameters describe the risks associated with the applicant. Institutions use risk parameters to underwrite insurance policies.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
