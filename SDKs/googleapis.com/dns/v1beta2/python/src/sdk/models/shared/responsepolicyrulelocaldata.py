from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcerecordset


@dataclass_json
@dataclass
class ResponsePolicyRuleLocalData:
    local_datas: Optional[List[resourcerecordset.ResourceRecordSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localDatas' }})
    
