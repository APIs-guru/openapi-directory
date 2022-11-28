from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetABatchOfBusinessTransactionClassificationResultsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetABatchOfBusinessTransactionClassificationResults200ApplicationJSONResults:
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    merchant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant') }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_id') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    

@dataclass_json
@dataclass
class GetABatchOfBusinessTransactionClassificationResults200ApplicationJSON:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    progress: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    results: Optional[List[GetABatchOfBusinessTransactionClassificationResults200ApplicationJSONResults]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    

@dataclass
class GetABatchOfBusinessTransactionClassificationResultsRequest:
    path_params: GetABatchOfBusinessTransactionClassificationResultsPathParams = field()
    

@dataclass
class GetABatchOfBusinessTransactionClassificationResultsResponse:
    content_type: str = field()
    status_code: int = field()
    get_a_batch_of_business_transaction_classification_results_200_application_json_object: Optional[GetABatchOfBusinessTransactionClassificationResults200ApplicationJSON] = field(default=None)
    
