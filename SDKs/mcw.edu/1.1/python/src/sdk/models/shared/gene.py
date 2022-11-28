from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class Gene:
    agr_description: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    ensembl_full_name: Optional[str] = field(default=None)
    ensembl_gene_symbol: Optional[str] = field(default=None)
    ensembl_gene_type: Optional[str] = field(default=None)
    gene_source: Optional[str] = field(default=None)
    key: Optional[int] = field(default=None)
    merged_description: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    ncbi_annot_status: Optional[str] = field(default=None)
    nomen_review_date: Optional[datetime] = field(default=None)
    nomen_source: Optional[str] = field(default=None)
    notes: Optional[str] = field(default=None)
    ref_seq_status: Optional[str] = field(default=None)
    rgd_id: Optional[int] = field(default=None)
    so_acc_id: Optional[str] = field(default=None)
    species_type_key: Optional[int] = field(default=None)
    symbol: Optional[str] = field(default=None)
    type: Optional[str] = field(default=None)
    variant: Optional[bool] = field(default=None)
    
