from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WindowsUpdate:
    r"""WindowsUpdate
    Windows Update represents the metadata about the update for the Windows operating system. The fields in this message come from the Windows Update API documented at https://docs.microsoft.com/en-us/windows/win32/api/wuapi/nn-wuapi-iupdate.
    """
    
    categories: Optional[List[Category]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    identity: Optional[Identity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity') }})
    kb_article_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kbArticleIds') }})
    last_published_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastPublishedTimestamp') }})
    support_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportUrl') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
