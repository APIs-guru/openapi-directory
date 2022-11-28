from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MetadataOptions:
    r"""MetadataOptions
    Class MetadataOptions.
    """
    
    disabled_image_fetchers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisabledImageFetchers') }})
    disabled_metadata_fetchers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisabledMetadataFetchers') }})
    disabled_metadata_savers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DisabledMetadataSavers') }})
    image_fetcher_order: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageFetcherOrder') }})
    item_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemType') }})
    local_metadata_reader_order: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalMetadataReaderOrder') }})
    metadata_fetcher_order: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataFetcherOrder') }})
    
