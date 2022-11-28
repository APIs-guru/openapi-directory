from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum(str, Enum):
    COMPRESSION_TYPE_UNSPECIFIED = "COMPRESSION_TYPE_UNSPECIFIED"
    RAW = "RAW"
    RICE = "RICE"

class WebriskThreatListsComputeDiffThreatTypeEnum(str, Enum):
    THREAT_TYPE_UNSPECIFIED = "THREAT_TYPE_UNSPECIFIED"
    MALWARE = "MALWARE"
    SOCIAL_ENGINEERING = "SOCIAL_ENGINEERING"
    UNWANTED_SOFTWARE = "UNWANTED_SOFTWARE"
    SOCIAL_ENGINEERING_EXTENDED_COVERAGE = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"


@dataclass
class WebriskThreatListsComputeDiffQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    constraints_max_database_entries: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'constraints.maxDatabaseEntries', 'style': 'form', 'explode': True }})
    constraints_max_diff_entries: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'constraints.maxDiffEntries', 'style': 'form', 'explode': True }})
    constraints_supported_compressions: Optional[List[WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'constraints.supportedCompressions', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    threat_type: Optional[WebriskThreatListsComputeDiffThreatTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'threatType', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    version_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'versionToken', 'style': 'form', 'explode': True }})
    

@dataclass
class WebriskThreatListsComputeDiffSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class WebriskThreatListsComputeDiffRequest:
    query_params: WebriskThreatListsComputeDiffQueryParams = field()
    security: WebriskThreatListsComputeDiffSecurity = field()
    

@dataclass
class WebriskThreatListsComputeDiffResponse:
    content_type: str = field()
    status_code: int = field()
    google_cloud_webrisk_v1_compute_threat_list_diff_response: Optional[shared.GoogleCloudWebriskV1ComputeThreatListDiffResponse] = field(default=None)
    
