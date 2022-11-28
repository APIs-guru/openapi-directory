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
class GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest:
    r"""GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest
    Describes a Safe Browsing API update request. Clients can request updates for multiple lists in a single request. The server may not respond to all requests, if the server has no updates for that list. NOTE: Field index 2 is unused. NEXT: 5
    """
    
    client: Optional[GoogleSecuritySafebrowsingV4ClientInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    list_update_requests: Optional[List[GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listUpdateRequests') }})
    
