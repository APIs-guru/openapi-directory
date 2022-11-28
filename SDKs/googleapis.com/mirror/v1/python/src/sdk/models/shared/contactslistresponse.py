from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ContactsListResponse:
    r"""ContactsListResponse
    A list of Contacts representing contacts. This is the response from the server to GET requests on the contacts collection.
    """
    
    items: Optional[List[Contact]] = field(default=None)
    kind: Optional[str] = field(default=None)
    
