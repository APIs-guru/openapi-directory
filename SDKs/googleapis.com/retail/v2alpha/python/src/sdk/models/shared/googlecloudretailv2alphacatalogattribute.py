from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum(str, Enum):
    DYNAMIC_FACETABLE_OPTION_UNSPECIFIED = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED"
    DYNAMIC_FACETABLE_ENABLED = "DYNAMIC_FACETABLE_ENABLED"
    DYNAMIC_FACETABLE_DISABLED = "DYNAMIC_FACETABLE_DISABLED"

class GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum(str, Enum):
    EXACT_SEARCHABLE_OPTION_UNSPECIFIED = "EXACT_SEARCHABLE_OPTION_UNSPECIFIED"
    EXACT_SEARCHABLE_ENABLED = "EXACT_SEARCHABLE_ENABLED"
    EXACT_SEARCHABLE_DISABLED = "EXACT_SEARCHABLE_DISABLED"

class GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum(str, Enum):
    INDEXABLE_OPTION_UNSPECIFIED = "INDEXABLE_OPTION_UNSPECIFIED"
    INDEXABLE_ENABLED = "INDEXABLE_ENABLED"
    INDEXABLE_DISABLED = "INDEXABLE_DISABLED"

class GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum(str, Enum):
    RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED"
    RECOMMENDATIONS_FILTERING_DISABLED = "RECOMMENDATIONS_FILTERING_DISABLED"
    RECOMMENDATIONS_FILTERING_ENABLED = "RECOMMENDATIONS_FILTERING_ENABLED"

class GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum(str, Enum):
    RETRIEVABLE_OPTION_UNSPECIFIED = "RETRIEVABLE_OPTION_UNSPECIFIED"
    RETRIEVABLE_ENABLED = "RETRIEVABLE_ENABLED"
    RETRIEVABLE_DISABLED = "RETRIEVABLE_DISABLED"

class GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum(str, Enum):
    SEARCHABLE_OPTION_UNSPECIFIED = "SEARCHABLE_OPTION_UNSPECIFIED"
    SEARCHABLE_ENABLED = "SEARCHABLE_ENABLED"
    SEARCHABLE_DISABLED = "SEARCHABLE_DISABLED"

class GoogleCloudRetailV2alphaCatalogAttributeTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    TEXTUAL = "TEXTUAL"
    NUMERICAL = "NUMERICAL"


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaCatalogAttributeInput:
    r"""GoogleCloudRetailV2alphaCatalogAttributeInput
    Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
    """
    
    dynamic_facetable_option: Optional[GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicFacetableOption') }})
    exact_searchable_option: Optional[GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exactSearchableOption') }})
    indexable_option: Optional[GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexableOption') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    recommendations_filtering_option: Optional[GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationsFilteringOption') }})
    retrievable_option: Optional[GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retrievableOption') }})
    searchable_option: Optional[GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchableOption') }})
    

@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaCatalogAttribute:
    r"""GoogleCloudRetailV2alphaCatalogAttribute
    Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
    """
    
    dynamic_facetable_option: Optional[GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicFacetableOption') }})
    exact_searchable_option: Optional[GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exactSearchableOption') }})
    in_use: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inUse') }})
    indexable_option: Optional[GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexableOption') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    recommendations_filtering_option: Optional[GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationsFilteringOption') }})
    retrievable_option: Optional[GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retrievableOption') }})
    searchable_option: Optional[GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchableOption') }})
    type: Optional[GoogleCloudRetailV2alphaCatalogAttributeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
