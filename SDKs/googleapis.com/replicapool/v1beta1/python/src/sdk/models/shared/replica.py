from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class Replica:
    r"""Replica
    An individual Replica within a Pool. Replicas are automatically created by the replica pool, using the template provided by the user. You cannot directly create replicas.
    """
    
    name: Optional[str] = field(default=None)
    self_link: Optional[str] = field(default=None)
    status: Optional[ReplicaStatus] = field(default=None)
    
