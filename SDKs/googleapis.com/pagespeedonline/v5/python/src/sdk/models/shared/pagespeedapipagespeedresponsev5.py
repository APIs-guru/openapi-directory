from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import lighthouseresultv5
from . import pagespeedapiloadingexperiencev5
from . import pagespeedapiloadingexperiencev5
from . import pagespeedversion


@dataclass_json
@dataclass
class PagespeedAPIPagespeedResponseV5:
    analysis_utc_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analysisUTCTimestamp' }})
    captcha_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'captchaResult' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    lighthouse_result: Optional[lighthouseresultv5.LighthouseResultV5] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lighthouseResult' }})
    loading_experience: Optional[pagespeedapiloadingexperiencev5.PagespeedAPILoadingExperienceV5] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadingExperience' }})
    origin_loading_experience: Optional[pagespeedapiloadingexperiencev5.PagespeedAPILoadingExperienceV5] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originLoadingExperience' }})
    version: Optional[pagespeedversion.PagespeedVersion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
