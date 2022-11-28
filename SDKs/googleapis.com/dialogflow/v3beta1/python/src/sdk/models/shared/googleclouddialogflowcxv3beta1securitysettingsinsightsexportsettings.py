from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings:
    r"""GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings
    Settings for exporting conversations to [Insights](https://cloud.google.com/contact-center/insights/docs).
    """
    
    enable_insights_export: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableInsightsExport') }})
    
