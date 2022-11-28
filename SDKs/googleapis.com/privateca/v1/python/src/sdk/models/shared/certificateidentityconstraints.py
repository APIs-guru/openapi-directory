from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CertificateIdentityConstraints:
    r"""CertificateIdentityConstraints
    Describes constraints on a Certificate's Subject and SubjectAltNames.
    """
    
    allow_subject_alt_names_passthrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowSubjectAltNamesPassthrough') }})
    allow_subject_passthrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowSubjectPassthrough') }})
    cel_expression: Optional[Expr] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('celExpression') }})
    
