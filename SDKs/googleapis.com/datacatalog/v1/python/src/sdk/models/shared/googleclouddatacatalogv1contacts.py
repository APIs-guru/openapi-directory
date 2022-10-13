from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1contactsperson


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1Contacts:
    people: Optional[List[googleclouddatacatalogv1contactsperson.GoogleCloudDatacatalogV1ContactsPerson]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'people' }})
    
