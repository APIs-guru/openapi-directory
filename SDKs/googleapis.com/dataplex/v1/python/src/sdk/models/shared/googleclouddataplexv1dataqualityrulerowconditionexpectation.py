from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation:
    r"""GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation
    Evaluates whether each row passes the specified condition. The SQL expression needs to use BigQuery standard SQL syntax and should produce a boolean per row as the result. Example: col1 >= 0 AND col2 < 10
    """
    
    sql_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlExpression') }})
    
