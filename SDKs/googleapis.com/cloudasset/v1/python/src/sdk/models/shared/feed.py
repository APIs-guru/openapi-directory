from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FeedContentTypeEnum(str, Enum):
    CONTENT_TYPE_UNSPECIFIED = "CONTENT_TYPE_UNSPECIFIED"
    RESOURCE = "RESOURCE"
    IAM_POLICY = "IAM_POLICY"
    ORG_POLICY = "ORG_POLICY"
    ACCESS_POLICY = "ACCESS_POLICY"
    OS_INVENTORY = "OS_INVENTORY"
    RELATIONSHIP = "RELATIONSHIP"


@dataclass_json
@dataclass
class Feed:
    r"""Feed
    An asset feed used to export asset updates to a destinations. An asset feed filter controls what updates are exported. The asset feed must be created within a project, organization, or folder. Supported destinations are: Pub/Sub topics.
    """
    
    asset_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetNames') }})
    asset_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetTypes') }})
    condition: Optional[Expr] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    content_type: Optional[FeedContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    feed_output_config: Optional[FeedOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedOutputConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    relationship_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationshipTypes') }})
    
