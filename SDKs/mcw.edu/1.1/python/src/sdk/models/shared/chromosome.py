from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Chromosome:
    chromosome: Optional[str] = field(default=None)
    contig_count: Optional[int] = field(default=None)
    gap_count: Optional[int] = field(default=None)
    gap_length: Optional[int] = field(default=None)
    genbank_id: Optional[str] = field(default=None)
    map_key: Optional[int] = field(default=None)
    ordinal_number: Optional[int] = field(default=None)
    refseq_id: Optional[str] = field(default=None)
    seq_length: Optional[int] = field(default=None)
    
