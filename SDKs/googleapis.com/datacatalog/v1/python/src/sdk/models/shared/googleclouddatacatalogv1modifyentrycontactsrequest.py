from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1contacts


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1ModifyEntryContactsRequest:
    contacts: Optional[googleclouddatacatalogv1contacts.GoogleCloudDatacatalogV1Contacts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contacts' }})
    
