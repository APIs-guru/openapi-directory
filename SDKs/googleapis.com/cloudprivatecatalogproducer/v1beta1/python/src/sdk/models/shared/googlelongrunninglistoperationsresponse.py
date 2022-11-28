from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GoogleLongrunningListOperationsResponse:
    r"""GoogleLongrunningListOperationsResponse
    The response message for Operations.ListOperations.
    """
    
    next_page_token: Optional[str] = field(default=None)
    operations: Optional[List[GoogleLongrunningOperation]] = field(default=None)
    
