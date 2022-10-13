from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import addbandingresponse
from . import addchartresponse
from . import adddatasourceresponse
from . import adddimensiongroupresponse
from . import addfilterviewresponse
from . import addnamedrangeresponse
from . import addprotectedrangeresponse
from . import addsheetresponse
from . import addslicerresponse
from . import createdevelopermetadataresponse
from . import deleteconditionalformatruleresponse
from . import deletedevelopermetadataresponse
from . import deletedimensiongroupresponse
from . import deleteduplicatesresponse
from . import duplicatefilterviewresponse
from . import duplicatesheetresponse
from . import findreplaceresponse
from . import refreshdatasourceresponse
from . import trimwhitespaceresponse
from . import updateconditionalformatruleresponse
from . import updatedatasourceresponse
from . import updatedevelopermetadataresponse
from . import updateembeddedobjectpositionresponse


@dataclass_json
@dataclass
class Response:
    add_banding: Optional[addbandingresponse.AddBandingResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addBanding' }})
    add_chart: Optional[addchartresponse.AddChartResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addChart' }})
    add_data_source: Optional[adddatasourceresponse.AddDataSourceResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addDataSource' }})
    add_dimension_group: Optional[adddimensiongroupresponse.AddDimensionGroupResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addDimensionGroup' }})
    add_filter_view: Optional[addfilterviewresponse.AddFilterViewResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addFilterView' }})
    add_named_range: Optional[addnamedrangeresponse.AddNamedRangeResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addNamedRange' }})
    add_protected_range: Optional[addprotectedrangeresponse.AddProtectedRangeResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addProtectedRange' }})
    add_sheet: Optional[addsheetresponse.AddSheetResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addSheet' }})
    add_slicer: Optional[addslicerresponse.AddSlicerResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addSlicer' }})
    create_developer_metadata: Optional[createdevelopermetadataresponse.CreateDeveloperMetadataResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createDeveloperMetadata' }})
    delete_conditional_format_rule: Optional[deleteconditionalformatruleresponse.DeleteConditionalFormatRuleResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteConditionalFormatRule' }})
    delete_developer_metadata: Optional[deletedevelopermetadataresponse.DeleteDeveloperMetadataResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteDeveloperMetadata' }})
    delete_dimension_group: Optional[deletedimensiongroupresponse.DeleteDimensionGroupResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteDimensionGroup' }})
    delete_duplicates: Optional[deleteduplicatesresponse.DeleteDuplicatesResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteDuplicates' }})
    duplicate_filter_view: Optional[duplicatefilterviewresponse.DuplicateFilterViewResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duplicateFilterView' }})
    duplicate_sheet: Optional[duplicatesheetresponse.DuplicateSheetResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duplicateSheet' }})
    find_replace: Optional[findreplaceresponse.FindReplaceResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'findReplace' }})
    refresh_data_source: Optional[refreshdatasourceresponse.RefreshDataSourceResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshDataSource' }})
    trim_whitespace: Optional[trimwhitespaceresponse.TrimWhitespaceResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trimWhitespace' }})
    update_conditional_format_rule: Optional[updateconditionalformatruleresponse.UpdateConditionalFormatRuleResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateConditionalFormatRule' }})
    update_data_source: Optional[updatedatasourceresponse.UpdateDataSourceResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateDataSource' }})
    update_developer_metadata: Optional[updatedevelopermetadataresponse.UpdateDeveloperMetadataResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateDeveloperMetadata' }})
    update_embedded_object_position: Optional[updateembeddedobjectpositionresponse.UpdateEmbeddedObjectPositionResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateEmbeddedObjectPosition' }})
    
