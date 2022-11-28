from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GoogleIamV1TestIamPermissionsResponse:
    r"""GoogleIamV1TestIamPermissionsResponse
    Response message for `TestIamPermissions` method.
    """
    
    permissions: Optional[List[str]] = field(default=None)
    
