from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReportAPIColumnSpec:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnName' }})
    custom_dimension_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customDimensionName' }})
    custom_metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customMetricName' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    group_by_column: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupByColumn' }})
    header_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headerText' }})
    platform_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformSource' }})
    product_report_perspective: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productReportPerspective' }})
    saved_column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'savedColumnName' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    
