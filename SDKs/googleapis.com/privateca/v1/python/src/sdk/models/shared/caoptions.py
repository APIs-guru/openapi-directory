from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CaOptions:
    r"""CaOptions
    Describes values that are relevant in a CA certificate.
    """
    
    is_ca: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCa') }})
    max_issuer_path_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxIssuerPathLength') }})
    
