from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class Annotation:
    annotated_object_rgd_id: Optional[int] = field(default=None)
    annotation_extension: Optional[str] = field(default=None)
    aspect: Optional[str] = field(default=None)
    created_by: Optional[int] = field(default=None)
    created_date: Optional[datetime] = field(default=None)
    data_src: Optional[str] = field(default=None)
    evidence: Optional[str] = field(default=None)
    gene_product_form_id: Optional[str] = field(default=None)
    key: Optional[int] = field(default=None)
    last_modified_by: Optional[int] = field(default=None)
    last_modified_date: Optional[datetime] = field(default=None)
    notes: Optional[str] = field(default=None)
    object_name: Optional[str] = field(default=None)
    object_symbol: Optional[str] = field(default=None)
    original_created_date: Optional[datetime] = field(default=None)
    qualifier: Optional[str] = field(default=None)
    ref_rgd_id: Optional[int] = field(default=None)
    relative_to: Optional[str] = field(default=None)
    rgd_object_key: Optional[int] = field(default=None)
    species_type_key: Optional[int] = field(default=None)
    term: Optional[str] = field(default=None)
    term_acc: Optional[str] = field(default=None)
    with_info: Optional[str] = field(default=None)
    xref_source: Optional[str] = field(default=None)
    
