from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum(str, Enum):
    DYNAMIC_FACETABLE_OPTION_UNSPECIFIED = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED"
    DYNAMIC_FACETABLE_ENABLED = "DYNAMIC_FACETABLE_ENABLED"
    DYNAMIC_FACETABLE_DISABLED = "DYNAMIC_FACETABLE_DISABLED"

class GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum(str, Enum):
    EXACT_SEARCHABLE_OPTION_UNSPECIFIED = "EXACT_SEARCHABLE_OPTION_UNSPECIFIED"
    EXACT_SEARCHABLE_ENABLED = "EXACT_SEARCHABLE_ENABLED"
    EXACT_SEARCHABLE_DISABLED = "EXACT_SEARCHABLE_DISABLED"

class GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum(str, Enum):
    INDEXABLE_OPTION_UNSPECIFIED = "INDEXABLE_OPTION_UNSPECIFIED"
    INDEXABLE_ENABLED = "INDEXABLE_ENABLED"
    INDEXABLE_DISABLED = "INDEXABLE_DISABLED"

class GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum(str, Enum):
    RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED"
    RECOMMENDATIONS_FILTERING_DISABLED = "RECOMMENDATIONS_FILTERING_DISABLED"
    RECOMMENDATIONS_FILTERING_ENABLED = "RECOMMENDATIONS_FILTERING_ENABLED"

class GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum(str, Enum):
    SEARCHABLE_OPTION_UNSPECIFIED = "SEARCHABLE_OPTION_UNSPECIFIED"
    SEARCHABLE_ENABLED = "SEARCHABLE_ENABLED"
    SEARCHABLE_DISABLED = "SEARCHABLE_DISABLED"

class GoogleCloudRetailV2betaCatalogAttributeTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    TEXTUAL = "TEXTUAL"
    NUMERICAL = "NUMERICAL"


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaCatalogAttribute:
    dynamic_facetable_option: Optional[GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicFacetableOption' }})
    exact_searchable_option: Optional[GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exactSearchableOption' }})
    in_use: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inUse' }})
    indexable_option: Optional[GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexableOption' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    recommendations_filtering_option: Optional[GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationsFilteringOption' }})
    searchable_option: Optional[GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchableOption' }})
    type: Optional[GoogleCloudRetailV2betaCatalogAttributeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
