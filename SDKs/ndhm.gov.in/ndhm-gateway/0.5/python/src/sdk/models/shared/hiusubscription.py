from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import organizationrepresentation
from . import consentmanagerpatientid
from . import hiusubscriptioncontext


@dataclass_json
@dataclass
class HiuSubscription:
    hiu: organizationrepresentation.OrganizationRepresentation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiu' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    patient: consentmanagerpatientid.ConsentManagerPatientID = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patient' }})
    sources: List[hiusubscriptioncontext.HiuSubscriptionContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sources' }})
    
