from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum(str, Enum):
    DYNAMIC_FACETABLE_OPTION_UNSPECIFIED = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED"
    DYNAMIC_FACETABLE_ENABLED = "DYNAMIC_FACETABLE_ENABLED"
    DYNAMIC_FACETABLE_DISABLED = "DYNAMIC_FACETABLE_DISABLED"

class GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum(str, Enum):
    INDEXABLE_OPTION_UNSPECIFIED = "INDEXABLE_OPTION_UNSPECIFIED"
    INDEXABLE_ENABLED = "INDEXABLE_ENABLED"
    INDEXABLE_DISABLED = "INDEXABLE_DISABLED"

class GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum(str, Enum):
    SEARCHABLE_OPTION_UNSPECIFIED = "SEARCHABLE_OPTION_UNSPECIFIED"
    SEARCHABLE_ENABLED = "SEARCHABLE_ENABLED"
    SEARCHABLE_DISABLED = "SEARCHABLE_DISABLED"

class GoogleCloudRetailV2CatalogAttributeTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    TEXTUAL = "TEXTUAL"
    NUMERICAL = "NUMERICAL"


@dataclass_json
@dataclass
class GoogleCloudRetailV2CatalogAttribute:
    dynamic_facetable_option: Optional[GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicFacetableOption' }})
    in_use: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inUse' }})
    indexable_option: Optional[GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexableOption' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    searchable_option: Optional[GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchableOption' }})
    type: Optional[GoogleCloudRetailV2CatalogAttributeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
