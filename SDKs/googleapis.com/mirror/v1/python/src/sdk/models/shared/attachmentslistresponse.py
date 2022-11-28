from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class AttachmentsListResponse:
    r"""AttachmentsListResponse
    A list of Attachments. This is the response from the server to GET requests on the attachments collection.
    """
    
    items: Optional[List[Attachment]] = field(default=None)
    kind: Optional[str] = field(default=None)
    
