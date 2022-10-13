from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1phrasematcher


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    phrase_matchers: Optional[List[googlecloudcontactcenterinsightsv1phrasematcher.GoogleCloudContactcenterinsightsV1PhraseMatcher]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phraseMatchers' }})
    
