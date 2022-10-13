from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import expr
from . import attribute


@dataclass_json
@dataclass
class GoogleCloudHealthcareV1beta1ConsentPolicy:
    authorization_rule: Optional[expr.Expr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationRule' }})
    resource_attributes: Optional[List[attribute.Attribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceAttributes' }})
    
