from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DigitalassetlinksAssetlinksCheckQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    relation: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'relation', 'style': 'form', 'explode': True }})
    source_android_app_certificate_sha256_fingerprint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source.androidApp.certificate.sha256Fingerprint', 'style': 'form', 'explode': True }})
    source_android_app_package_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source.androidApp.packageName', 'style': 'form', 'explode': True }})
    source_web_site: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'source.web.site', 'style': 'form', 'explode': True }})
    target_android_app_certificate_sha256_fingerprint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'target.androidApp.certificate.sha256Fingerprint', 'style': 'form', 'explode': True }})
    target_android_app_package_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'target.androidApp.packageName', 'style': 'form', 'explode': True }})
    target_web_site: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'target.web.site', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DigitalassetlinksAssetlinksCheckRequest:
    query_params: DigitalassetlinksAssetlinksCheckQueryParams = field()
    

@dataclass
class DigitalassetlinksAssetlinksCheckResponse:
    content_type: str = field()
    status_code: int = field()
    check_response: Optional[shared.CheckResponse] = field(default=None)
    
