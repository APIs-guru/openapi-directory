from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class Term:
    acc_id: Optional[str] = field(default=None)
    comment: Optional[str] = field(default=None)
    created_by: Optional[str] = field(default=None)
    creation_date: Optional[datetime] = field(default=None)
    definition: Optional[str] = field(default=None)
    modification_date: Optional[datetime] = field(default=None)
    obsolete: Optional[int] = field(default=None)
    ontology_id: Optional[str] = field(default=None)
    term: Optional[str] = field(default=None)
    xrefs: Optional[List[TermXRef]] = field(default=None)
    
