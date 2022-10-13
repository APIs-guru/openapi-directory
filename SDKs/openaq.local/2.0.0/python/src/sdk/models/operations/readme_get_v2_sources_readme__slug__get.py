from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ReadmeGetV2SourcesReadmeSlugGetPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReadmeGetV2SourcesReadmeSlugGetRequest:
    path_params: ReadmeGetV2SourcesReadmeSlugGetPathParams = field(default=None)
    

@dataclass
class ReadmeGetV2SourcesReadmeSlugGetResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    readme_get_v2_sources_readme_slug_get_200_application_json_any: Optional[Any] = field(default=None)
    
