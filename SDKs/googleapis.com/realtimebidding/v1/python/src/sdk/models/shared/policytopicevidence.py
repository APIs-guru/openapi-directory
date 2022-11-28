from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PolicyTopicEvidence:
    r"""PolicyTopicEvidence
    Evidence associated with a policy topic entry.
    """
    
    destination_not_crawlable: Optional[DestinationNotCrawlableEvidence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationNotCrawlable') }})
    destination_not_working: Optional[DestinationNotWorkingEvidence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationNotWorking') }})
    destination_url: Optional[DestinationURLEvidence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationUrl') }})
    domain_call: Optional[DomainCallEvidence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainCall') }})
    download_size: Optional[DownloadSizeEvidence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downloadSize') }})
    http_call: Optional[HTTPCallEvidence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpCall') }})
    http_cookie: Optional[HTTPCookieEvidence] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpCookie') }})
    
