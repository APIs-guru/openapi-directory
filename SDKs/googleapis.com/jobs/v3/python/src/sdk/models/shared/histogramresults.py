from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import compensationhistogramresult
from . import customattributehistogramresult
from . import histogramresult


@dataclass_json
@dataclass
class HistogramResults:
    compensation_histogram_results: Optional[List[compensationhistogramresult.CompensationHistogramResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compensationHistogramResults' }})
    custom_attribute_histogram_results: Optional[List[customattributehistogramresult.CustomAttributeHistogramResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customAttributeHistogramResults' }})
    simple_histogram_results: Optional[List[histogramresult.HistogramResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simpleHistogramResults' }})
    
