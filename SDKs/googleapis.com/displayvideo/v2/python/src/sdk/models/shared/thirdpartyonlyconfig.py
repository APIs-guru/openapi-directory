from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ThirdPartyOnlyConfig:
    r"""ThirdPartyOnlyConfig
    Settings for advertisers that use third-party ad servers only.
    """
    
    pixel_order_id_reporting_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pixelOrderIdReportingEnabled') }})
    
