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
class WindowsUpdatePackage:
    r"""WindowsUpdatePackage
    Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated.
    """
    
    categories: Optional[List[WindowsUpdateCategory]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    kb_article_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kbArticleIds') }})
    last_deployment_change_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastDeploymentChangeTime') }})
    more_info_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('moreInfoUrls') }})
    revision_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionNumber') }})
    support_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportUrl') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    update_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateId') }})
    
