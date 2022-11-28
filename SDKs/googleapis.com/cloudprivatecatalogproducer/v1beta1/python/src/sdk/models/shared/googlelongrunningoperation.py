from dataclasses import dataclass, field
from typing import Any,Optional
from . import *


@dataclass
class GoogleLongrunningOperation:
    r"""GoogleLongrunningOperation
    This resource represents a long-running operation that is the result of a
    network API call.
    """
    
    done: Optional[bool] = field(default=None)
    error: Optional[GoogleRPCStatus] = field(default=None)
    metadata: Optional[dict[str, Any]] = field(default=None)
    name: Optional[str] = field(default=None)
    response: Optional[dict[str, Any]] = field(default=None)
    
