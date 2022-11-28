from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GooglePlayAnalytics:
    r"""GooglePlayAnalytics
    Parameters for Google Play Campaign Measurements. [Learn more](https://developers.google.com/analytics/devguides/collection/android/v4/campaigns#campaign-params)
    """
    
    gclid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gclid') }})
    utm_campaign: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utmCampaign') }})
    utm_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utmContent') }})
    utm_medium: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utmMedium') }})
    utm_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utmSource') }})
    utm_term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utmTerm') }})
    
