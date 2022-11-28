from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Map:
    dbsnp_version: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    key: Optional[int] = field(default=None)
    method_key: Optional[int] = field(default=None)
    name: Optional[str] = field(default=None)
    notes: Optional[str] = field(default=None)
    primary_ref_assembly: Optional[bool] = field(default=None)
    rank: Optional[int] = field(default=None)
    ref_seq_assembly_acc: Optional[str] = field(default=None)
    ref_seq_assembly_name: Optional[str] = field(default=None)
    rgd_id: Optional[int] = field(default=None)
    source: Optional[str] = field(default=None)
    species_type_key: Optional[int] = field(default=None)
    ucsc_assembly_id: Optional[str] = field(default=None)
    unit: Optional[str] = field(default=None)
    version: Optional[str] = field(default=None)
    
