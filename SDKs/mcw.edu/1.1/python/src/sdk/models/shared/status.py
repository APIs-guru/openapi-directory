from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class Status:
    cryopreserved_embryo: Optional[bool] = field(default=None)
    cryopreserved_sperm: Optional[bool] = field(default=None)
    cryorecovery: Optional[bool] = field(default=None)
    key: Optional[int] = field(default=None)
    live_animals: Optional[bool] = field(default=None)
    status_date: Optional[datetime] = field(default=None)
    strain_rgd_id: Optional[int] = field(default=None)
    
