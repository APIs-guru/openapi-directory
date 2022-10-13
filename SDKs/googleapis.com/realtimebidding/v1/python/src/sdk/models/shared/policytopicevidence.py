from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import destinationnotcrawlableevidence
from . import destinationnotworkingevidence
from . import destinationurlevidence
from . import domaincallevidence
from . import downloadsizeevidence
from . import httpcallevidence
from . import httpcookieevidence


@dataclass_json
@dataclass
class PolicyTopicEvidence:
    destination_not_crawlable: Optional[destinationnotcrawlableevidence.DestinationNotCrawlableEvidence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationNotCrawlable' }})
    destination_not_working: Optional[destinationnotworkingevidence.DestinationNotWorkingEvidence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationNotWorking' }})
    destination_url: Optional[destinationurlevidence.DestinationURLEvidence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationUrl' }})
    domain_call: Optional[domaincallevidence.DomainCallEvidence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainCall' }})
    download_size: Optional[downloadsizeevidence.DownloadSizeEvidence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadSize' }})
    http_call: Optional[httpcallevidence.HTTPCallEvidence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpCall' }})
    http_cookie: Optional[httpcookieevidence.HTTPCookieEvidence] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpCookie' }})
    
