from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class CivicinfoElectionsVoterInfoQueryQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    address: str = field(default=None, metadata={'query_param': { 'field_name': 'address', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    election_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'electionId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    official_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'officialOnly', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    return_all_available_data: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'returnAllAvailableData', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class CivicinfoElectionsVoterInfoQueryRequest:
    query_params: CivicinfoElectionsVoterInfoQueryQueryParams = field(default=None)
    

@dataclass
class CivicinfoElectionsVoterInfoQueryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    voter_info_response: Optional[shared.VoterInfoResponse] = field(default=None)
    
