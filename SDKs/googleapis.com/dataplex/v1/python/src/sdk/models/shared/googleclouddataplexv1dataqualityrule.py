from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataQualityRule:
    r"""GoogleCloudDataplexV1DataQualityRule
    A rule captures data quality intent about a data source.
    """
    
    column: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column') }})
    dimension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    ignore_null: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreNull') }})
    non_null_expectation: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonNullExpectation') }})
    range_expectation: Optional[GoogleCloudDataplexV1DataQualityRuleRangeExpectation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangeExpectation') }})
    regex_expectation: Optional[GoogleCloudDataplexV1DataQualityRuleRegexExpectation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regexExpectation') }})
    row_condition_expectation: Optional[GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowConditionExpectation') }})
    set_expectation: Optional[GoogleCloudDataplexV1DataQualityRuleSetExpectation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setExpectation') }})
    statistic_range_expectation: Optional[GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statisticRangeExpectation') }})
    table_condition_expectation: Optional[GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableConditionExpectation') }})
    threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threshold') }})
    uniqueness_expectation: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniquenessExpectation') }})
    
