from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum(str, Enum):
    AUTO_EXPANSION_MODE_UNSPECIFIED = "AUTO_EXPANSION_MODE_UNSPECIFIED"
    AUTO_EXPANSION_MODE_DEFAULT = "AUTO_EXPANSION_MODE_DEFAULT"

class GoogleCloudDialogflowV2EntityTypeKindEnum(str, Enum):
    KIND_UNSPECIFIED = "KIND_UNSPECIFIED"
    KIND_MAP = "KIND_MAP"
    KIND_LIST = "KIND_LIST"
    KIND_REGEXP = "KIND_REGEXP"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2EntityType:
    r"""GoogleCloudDialogflowV2EntityType
    Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview).
    """
    
    auto_expansion_mode: Optional[GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoExpansionMode') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enable_fuzzy_extraction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableFuzzyExtraction') }})
    entities: Optional[List[GoogleCloudDialogflowV2EntityTypeEntity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    kind: Optional[GoogleCloudDialogflowV2EntityTypeKindEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
