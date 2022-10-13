from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import apkdetail


@dataclass_json
@dataclass
class GetApkDetailsResponse:
    apk_detail: Optional[apkdetail.ApkDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apkDetail' }})
    
