from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class Strain:
    background_strain_rgd_id: Optional[int] = field(default=None)
    chr_altered: Optional[str] = field(default=None)
    color: Optional[str] = field(default=None)
    genetic_status: Optional[str] = field(default=None)
    genetics: Optional[str] = field(default=None)
    image_url: Optional[str] = field(default=None)
    inbred_gen: Optional[str] = field(default=None)
    key: Optional[int] = field(default=None)
    last_status: Optional[str] = field(default=None)
    last_status_object: Optional[Status] = field(default=None)
    modification_method: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    notes: Optional[str] = field(default=None)
    origin: Optional[str] = field(default=None)
    research_use: Optional[str] = field(default=None)
    rgd_id: Optional[int] = field(default=None)
    source: Optional[str] = field(default=None)
    species_type_key: Optional[int] = field(default=None)
    status_log: Optional[List[Status]] = field(default=None)
    strain: Optional[str] = field(default=None)
    strain_type_name: Optional[str] = field(default=None)
    substrain: Optional[str] = field(default=None)
    symbol: Optional[str] = field(default=None)
    
