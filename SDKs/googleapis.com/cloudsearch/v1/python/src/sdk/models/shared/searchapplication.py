from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchApplicationInput:
    r"""SearchApplicationInput
    SearchApplication
    """
    
    data_source_restrictions: Optional[List[DataSourceRestriction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceRestrictions') }})
    default_facet_options: Optional[List[FacetOptions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultFacetOptions') }})
    default_sort_options: Optional[SortOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultSortOptions') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enable_audit_log: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAuditLog') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    query_interpretation_config: Optional[QueryInterpretationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryInterpretationConfig') }})
    return_result_thumbnail_urls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnResultThumbnailUrls') }})
    scoring_config: Optional[ScoringConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoringConfig') }})
    source_config: Optional[List[SourceConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceConfig') }})
    

@dataclass_json
@dataclass
class SearchApplication:
    r"""SearchApplication
    SearchApplication
    """
    
    data_source_restrictions: Optional[List[DataSourceRestriction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceRestrictions') }})
    default_facet_options: Optional[List[FacetOptions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultFacetOptions') }})
    default_sort_options: Optional[SortOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultSortOptions') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enable_audit_log: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableAuditLog') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operation_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationIds') }})
    query_interpretation_config: Optional[QueryInterpretationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryInterpretationConfig') }})
    return_result_thumbnail_urls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnResultThumbnailUrls') }})
    scoring_config: Optional[ScoringConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoringConfig') }})
    source_config: Optional[List[SourceConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceConfig') }})
    
