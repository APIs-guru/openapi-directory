from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Sslp:
    expected_size: Optional[int] = field(default=None)
    forward_seq: Optional[str] = field(default=None)
    key: Optional[int] = field(default=None)
    name: Optional[str] = field(default=None)
    notes: Optional[str] = field(default=None)
    reverse_seq: Optional[str] = field(default=None)
    rgd_id: Optional[int] = field(default=None)
    species_type_key: Optional[int] = field(default=None)
    sslp_type: Optional[str] = field(default=None)
    template_seq: Optional[str] = field(default=None)
    
