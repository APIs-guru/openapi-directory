from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1CustomLevel:
    r"""GoogleIdentityAccesscontextmanagerV1CustomLevel
    `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec
    """
    
    expr: Optional[Expr] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expr') }})
    
