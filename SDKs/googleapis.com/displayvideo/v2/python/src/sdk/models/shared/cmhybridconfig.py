from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CmHybridConfig:
    cm_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cmAccountId' }})
    cm_floodlight_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cmFloodlightConfigId' }})
    cm_floodlight_linking_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cmFloodlightLinkingAuthorized' }})
    cm_syncable_site_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cmSyncableSiteIds' }})
    dv360_to_cm_cost_reporting_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dv360ToCmCostReportingEnabled' }})
    dv360_to_cm_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dv360ToCmDataSharingEnabled' }})
    
