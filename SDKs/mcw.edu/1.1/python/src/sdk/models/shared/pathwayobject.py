from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PathwayObject:
    acc_id: Optional[str] = field(default=None)
    id: Optional[str] = field(default=None)
    obj_desc: Optional[str] = field(default=None)
    obj_name: Optional[str] = field(default=None)
    type_id: Optional[int] = field(default=None)
    type_name: Optional[str] = field(default=None)
    url: Optional[str] = field(default=None)
    xdb_key: Optional[int] = field(default=None)
    
