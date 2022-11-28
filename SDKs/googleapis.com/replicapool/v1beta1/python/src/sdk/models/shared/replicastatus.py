from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ReplicaStatus:
    r"""ReplicaStatus
    The current status of a Replica.
    """
    
    details: Optional[str] = field(default=None)
    state: Optional[str] = field(default=None)
    template_version: Optional[str] = field(default=None)
    vm_link: Optional[str] = field(default=None)
    vm_start_time: Optional[str] = field(default=None)
    
