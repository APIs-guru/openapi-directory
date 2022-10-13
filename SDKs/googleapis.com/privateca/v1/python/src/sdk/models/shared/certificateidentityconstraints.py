from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import expr


@dataclass_json
@dataclass
class CertificateIdentityConstraints:
    allow_subject_alt_names_passthrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowSubjectAltNamesPassthrough' }})
    allow_subject_passthrough: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowSubjectPassthrough' }})
    cel_expression: Optional[expr.Expr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'celExpression' }})
    
