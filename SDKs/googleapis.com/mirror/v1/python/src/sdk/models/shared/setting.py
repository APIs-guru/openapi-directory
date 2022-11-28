from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Setting:
    r"""Setting
    A setting for Glass.
    """
    
    id: Optional[str] = field(default=None)
    kind: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    
