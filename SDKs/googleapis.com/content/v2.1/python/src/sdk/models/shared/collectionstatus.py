from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CollectionStatus:
    r"""CollectionStatus
    The collectionstatus message.
    """
    
    collection_level_issuses: Optional[List[CollectionStatusItemLevelIssue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionLevelIssuses') }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }})
    destination_statuses: Optional[List[CollectionStatusDestinationStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationStatuses') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_update_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateDate') }})
    
