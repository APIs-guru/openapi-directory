from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetQuotesQuoteIDPathParams:
    quote_id: str = field(metadata={'path_param': { 'field_name': 'quote_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetQuotesQuoteID200ApplicationJSON:
    quote: Optional[shared.QuoteV1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quote') }})
    

@dataclass
class GetQuotesQuoteIDRequest:
    path_params: GetQuotesQuoteIDPathParams = field()
    

@dataclass
class GetQuotesQuoteIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_quotes_quote_id_200_application_json_object: Optional[GetQuotesQuoteID200ApplicationJSON] = field(default=None)
    
