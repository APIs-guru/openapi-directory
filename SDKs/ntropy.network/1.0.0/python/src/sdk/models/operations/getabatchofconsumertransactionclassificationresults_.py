from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetABatchOfConsumerTransactionClassificationResultsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetABatchOfConsumerTransactionClassificationResultsRequest:
    path_params: GetABatchOfConsumerTransactionClassificationResultsPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsContact:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    

@dataclass_json
@dataclass
class GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsLocation:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lon' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postal_code' }})
    

@dataclass_json
@dataclass
class GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsRating:
    reviews: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviews' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResults:
    contact: Optional[GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsContact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact' }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    location: Optional[GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    merchant: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant' }})
    person: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'person' }})
    rating: Optional[GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResultsRating] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_id' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    

@dataclass_json
@dataclass
class GetABatchOfConsumerTransactionClassificationResults200ApplicationJSON:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    progress: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    results: Optional[List[GetABatchOfConsumerTransactionClassificationResults200ApplicationJSONResults]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    

@dataclass
class GetABatchOfConsumerTransactionClassificationResultsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_a_batch_of_consumer_transaction_classification_results_200_application_json_object: Optional[GetABatchOfConsumerTransactionClassificationResults200ApplicationJSON] = field(default=None)
    
