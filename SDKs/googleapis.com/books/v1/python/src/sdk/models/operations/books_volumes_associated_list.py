from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BooksVolumesAssociatedListPathParams:
    volume_id: str = field(metadata={'path_param': { 'field_name': 'volumeId', 'style': 'simple', 'explode': False }})
    
class BooksVolumesAssociatedListAssociationEnum(str, Enum):
    ASSOCIATION_UNDEFINED = "ASSOCIATION_UNDEFINED"
    END_OF_SAMPLE = "end-of-sample"
    END_OF_VOLUME = "end-of-volume"
    RELATED_FOR_PLAY = "related-for-play"

class BooksVolumesAssociatedListMaxAllowedMaturityRatingEnum(str, Enum):
    MAX_ALLOWED_MATURITY_RATING_UNDEFINED = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED"
    MATURE = "MATURE"
    NOT_MATURE = "not-mature"


@dataclass
class BooksVolumesAssociatedListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    association: Optional[BooksVolumesAssociatedListAssociationEnum] = field(default=None, metadata={'query_param': { 'field_name': 'association', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    max_allowed_maturity_rating: Optional[BooksVolumesAssociatedListMaxAllowedMaturityRatingEnum] = field(default=None, metadata={'query_param': { 'field_name': 'maxAllowedMaturityRating', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    source: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BooksVolumesAssociatedListSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BooksVolumesAssociatedListRequest:
    path_params: BooksVolumesAssociatedListPathParams = field()
    query_params: BooksVolumesAssociatedListQueryParams = field()
    security: BooksVolumesAssociatedListSecurity = field()
    

@dataclass
class BooksVolumesAssociatedListResponse:
    content_type: str = field()
    status_code: int = field()
    volumes: Optional[shared.Volumes] = field(default=None)
    
