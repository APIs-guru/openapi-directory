from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetABatchOfBusinessTransactionClassificationResultsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetABatchOfBusinessTransactionClassificationResultsRequest:
    path_params: GetABatchOfBusinessTransactionClassificationResultsPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetABatchOfBusinessTransactionClassificationResults200ApplicationJSONResults:
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    merchant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_id' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    

@dataclass_json
@dataclass
class GetABatchOfBusinessTransactionClassificationResults200ApplicationJSON:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    results: Optional[List[GetABatchOfBusinessTransactionClassificationResults200ApplicationJSONResults]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    

@dataclass
class GetABatchOfBusinessTransactionClassificationResultsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_a_batch_of_business_transaction_classification_results_200_application_json_object: Optional[GetABatchOfBusinessTransactionClassificationResults200ApplicationJSON] = field(default=None)
    
