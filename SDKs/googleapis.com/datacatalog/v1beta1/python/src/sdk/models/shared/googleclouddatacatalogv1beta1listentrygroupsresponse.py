from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1entrygroup


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse:
    entry_groups: Optional[List[googleclouddatacatalogv1beta1entrygroup.GoogleCloudDatacatalogV1beta1EntryGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryGroups' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
