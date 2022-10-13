from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2datetime


@dataclass_json
@dataclass
class GooglePrivacyDlpV2QuoteInfo:
    date_time: Optional[googleprivacydlpv2datetime.GooglePrivacyDlpV2DateTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateTime' }})
    
