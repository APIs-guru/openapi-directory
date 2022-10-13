from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MetadataOptions:
    disabled_image_fetchers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisabledImageFetchers' }})
    disabled_metadata_fetchers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisabledMetadataFetchers' }})
    disabled_metadata_savers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisabledMetadataSavers' }})
    image_fetcher_order: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageFetcherOrder' }})
    item_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemType' }})
    local_metadata_reader_order: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalMetadataReaderOrder' }})
    metadata_fetcher_order: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataFetcherOrder' }})
    
