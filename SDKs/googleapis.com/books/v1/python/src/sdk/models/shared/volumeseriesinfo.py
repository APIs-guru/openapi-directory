from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VolumeseriesinfoVolumeSeriesIssue:
    issue_display_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueDisplayNumber' }})
    issue_order_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issueOrderNumber' }})
    

@dataclass_json
@dataclass
class VolumeseriesinfoVolumeSeries:
    issue: Optional[List[VolumeseriesinfoVolumeSeriesIssue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue' }})
    order_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderNumber' }})
    series_book_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seriesBookType' }})
    series_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seriesId' }})
    

@dataclass_json
@dataclass
class Volumeseriesinfo:
    book_display_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookDisplayNumber' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    short_series_book_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortSeriesBookTitle' }})
    volume_series: Optional[List[VolumeseriesinfoVolumeSeries]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeSeries' }})
    
