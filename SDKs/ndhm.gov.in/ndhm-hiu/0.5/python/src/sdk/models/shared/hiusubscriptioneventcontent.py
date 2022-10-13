from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import eventcategorydetail
from . import organizationrepresentation
from . import consentmanagerpatientid


@dataclass_json
@dataclass
class HiuSubscriptionEventContent:
    context: List[eventcategorydetail.EventCategoryDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    hip: organizationrepresentation.OrganizationRepresentation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hip' }})
    patient: consentmanagerpatientid.ConsentManagerPatientID = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patient' }})
    
