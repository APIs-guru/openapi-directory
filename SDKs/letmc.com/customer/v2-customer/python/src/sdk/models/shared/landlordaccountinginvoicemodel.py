from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LandlordAccountingInvoiceModel:
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    invoice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvoiceID' }})
    is_maintenance_invoice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsMaintenanceInvoice' }})
    
