from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1entryoverview


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1ModifyEntryOverviewRequest:
    entry_overview: Optional[googleclouddatacatalogv1entryoverview.GoogleCloudDatacatalogV1EntryOverview] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryOverview' }})
    
