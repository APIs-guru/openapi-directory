from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Qtl:
    chromosome: Optional[str] = field(default=None)
    flank1_rgd_id: Optional[int] = field(default=None)
    flank2_rgd_id: Optional[int] = field(default=None)
    inheritance_type: Optional[str] = field(default=None)
    key: Optional[int] = field(default=None)
    linkage_image: Optional[str] = field(default=None)
    lod: Optional[float] = field(default=None)
    lod_image: Optional[str] = field(default=None)
    most_significant_cmo_term: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    notes: Optional[str] = field(default=None)
    peak_offset: Optional[int] = field(default=None)
    peak_rgd_id: Optional[int] = field(default=None)
    pvalue: Optional[float] = field(default=None)
    rgd_id: Optional[int] = field(default=None)
    source_url: Optional[str] = field(default=None)
    species_type_key: Optional[int] = field(default=None)
    symbol: Optional[str] = field(default=None)
    variance: Optional[float] = field(default=None)
    
