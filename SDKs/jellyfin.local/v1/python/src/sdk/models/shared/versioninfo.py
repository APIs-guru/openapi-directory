from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VersionInfo:
    r"""VersionInfo
    Defines the MediaBrowser.Model.Updates.VersionInfo class.
    """
    
    version_number: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionNumber') }})
    changelog: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changelog') }})
    checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checksum') }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    repository_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryUrl') }})
    source_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUrl') }})
    target_abi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetAbi') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
