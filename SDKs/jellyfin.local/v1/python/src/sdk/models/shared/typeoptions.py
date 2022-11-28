from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TypeOptions:
    image_fetcher_order: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageFetcherOrder') }})
    image_fetchers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageFetchers') }})
    image_options: Optional[List[ImageOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageOptions') }})
    metadata_fetcher_order: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataFetcherOrder') }})
    metadata_fetchers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataFetchers') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
