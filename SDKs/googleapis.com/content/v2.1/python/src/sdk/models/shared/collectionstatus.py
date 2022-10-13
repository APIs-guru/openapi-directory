from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import collectionstatusitemlevelissue
from . import collectionstatusdestinationstatus


@dataclass_json
@dataclass
class CollectionStatus:
    collection_level_issuses: Optional[List[collectionstatusitemlevelissue.CollectionStatusItemLevelIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionLevelIssuses' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate' }})
    destination_statuses: Optional[List[collectionstatusdestinationstatus.CollectionStatusDestinationStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationStatuses' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_update_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateDate' }})
    
