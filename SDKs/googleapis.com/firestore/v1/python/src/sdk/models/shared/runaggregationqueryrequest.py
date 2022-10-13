from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import transactionoptions
from . import structuredaggregationquery


@dataclass_json
@dataclass
class RunAggregationQueryRequest:
    new_transaction: Optional[transactionoptions.TransactionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newTransaction' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    structured_aggregation_query: Optional[structuredaggregationquery.StructuredAggregationQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structuredAggregationQuery' }})
    transaction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    
