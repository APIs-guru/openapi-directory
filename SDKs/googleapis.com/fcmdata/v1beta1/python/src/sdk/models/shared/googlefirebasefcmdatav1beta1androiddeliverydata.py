from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlefirebasefcmdatav1beta1data
from . import googletypedate


@dataclass_json
@dataclass
class GoogleFirebaseFcmDataV1beta1AndroidDeliveryData:
    analytics_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyticsLabel' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    data: Optional[googlefirebasefcmdatav1beta1data.GoogleFirebaseFcmDataV1beta1Data] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    date: Optional[googletypedate.GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    
