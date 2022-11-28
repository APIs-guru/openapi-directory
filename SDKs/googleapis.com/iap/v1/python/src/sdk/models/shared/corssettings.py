from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CorsSettings:
    r"""CorsSettings
    Allows customers to configure HTTP request paths that'll allow HTTP OPTIONS call to bypass authentication and authorization.
    """
    
    allow_http_options: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowHttpOptions') }})
    
