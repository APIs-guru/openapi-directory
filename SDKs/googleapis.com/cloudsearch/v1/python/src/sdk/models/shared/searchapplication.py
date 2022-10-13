from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasourcerestriction
from . import facetoptions
from . import sortoptions
from . import queryinterpretationconfig
from . import scoringconfig
from . import sourceconfig


@dataclass_json
@dataclass
class SearchApplication:
    data_source_restrictions: Optional[List[datasourcerestriction.DataSourceRestriction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceRestrictions' }})
    default_facet_options: Optional[List[facetoptions.FacetOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultFacetOptions' }})
    default_sort_options: Optional[sortoptions.SortOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultSortOptions' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enable_audit_log: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableAuditLog' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operation_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationIds' }})
    query_interpretation_config: Optional[queryinterpretationconfig.QueryInterpretationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryInterpretationConfig' }})
    return_result_thumbnail_urls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnResultThumbnailUrls' }})
    scoring_config: Optional[scoringconfig.ScoringConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoringConfig' }})
    source_config: Optional[List[sourceconfig.SourceConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceConfig' }})
    
