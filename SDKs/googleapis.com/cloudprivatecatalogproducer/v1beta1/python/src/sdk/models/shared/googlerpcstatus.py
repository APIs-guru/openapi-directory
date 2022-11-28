from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GoogleRPCStatus:
    r"""GoogleRPCStatus
    The `Status` type defines a logical error model that is suitable for
    different programming environments, including REST APIs and RPC APIs. It is
    used by [gRPC](https://github.com/grpc). Each `Status` message contains
    three pieces of data: error code, error message, and error details.
    
    You can find out more about this error model and how to work with it in the
    [API Design Guide](https://cloud.google.com/apis/design/errors).
    """
    
    code: Optional[int] = field(default=None)
    details: Optional[List[dict[str, Any]]] = field(default=None)
    message: Optional[str] = field(default=None)
    
