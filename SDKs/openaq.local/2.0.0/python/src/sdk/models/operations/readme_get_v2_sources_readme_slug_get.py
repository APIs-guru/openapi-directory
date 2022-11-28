from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ReadmeGetV2SourcesReadmeSlugGetPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReadmeGetV2SourcesReadmeSlugGetRequest:
    path_params: ReadmeGetV2SourcesReadmeSlugGetPathParams = field()
    

@dataclass
class ReadmeGetV2SourcesReadmeSlugGetResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    readme_get_v2_sources_readme_slug_get_200_application_json_any: Optional[Any] = field(default=None)
    
