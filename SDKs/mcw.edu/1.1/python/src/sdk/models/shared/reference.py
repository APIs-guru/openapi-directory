from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class Reference:
    citation: Optional[str] = field(default=None)
    doi: Optional[str] = field(default=None)
    editors: Optional[str] = field(default=None)
    issue: Optional[str] = field(default=None)
    key: Optional[int] = field(default=None)
    notes: Optional[str] = field(default=None)
    pages: Optional[str] = field(default=None)
    pub_date: Optional[datetime] = field(default=None)
    pub_status: Optional[str] = field(default=None)
    publication: Optional[str] = field(default=None)
    publisher: Optional[str] = field(default=None)
    publisher_city: Optional[str] = field(default=None)
    ref_abstract: Optional[str] = field(default=None)
    reference_type: Optional[str] = field(default=None)
    rgd_id: Optional[int] = field(default=None)
    species_type_key: Optional[int] = field(default=None)
    title: Optional[str] = field(default=None)
    url_web_reference: Optional[str] = field(default=None)
    volume: Optional[str] = field(default=None)
    
