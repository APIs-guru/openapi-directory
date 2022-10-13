from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings:
    enable_insights_export: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableInsightsExport' }})
    
