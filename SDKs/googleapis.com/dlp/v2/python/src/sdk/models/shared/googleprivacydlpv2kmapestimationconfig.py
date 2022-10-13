from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2auxiliarytable
from . import googleprivacydlpv2taggedfield


@dataclass_json
@dataclass
class GooglePrivacyDlpV2KMapEstimationConfig:
    auxiliary_tables: Optional[List[googleprivacydlpv2auxiliarytable.GooglePrivacyDlpV2AuxiliaryTable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auxiliaryTables' }})
    quasi_ids: Optional[List[googleprivacydlpv2taggedfield.GooglePrivacyDlpV2TaggedField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quasiIds' }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionCode' }})
    
