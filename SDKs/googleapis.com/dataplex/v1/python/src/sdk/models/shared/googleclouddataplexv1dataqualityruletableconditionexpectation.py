from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation:
    r"""GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation
    Evaluates whether the provided expression is true. The SQL expression needs to use BigQuery standard SQL syntax and should produce a scalar boolean result. Example: MIN(col1) >= 0
    """
    
    sql_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlExpression') }})
    
