from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DatacatalogProjectsLocationsTaxonomiesExportPathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class DatacatalogProjectsLocationsTaxonomiesExportQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    serialized_taxonomies: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'serializedTaxonomies', 'style': 'form', 'explode': True }})
    taxonomies: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'taxonomies', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DatacatalogProjectsLocationsTaxonomiesExportSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DatacatalogProjectsLocationsTaxonomiesExportRequest:
    path_params: DatacatalogProjectsLocationsTaxonomiesExportPathParams = field()
    query_params: DatacatalogProjectsLocationsTaxonomiesExportQueryParams = field()
    security: DatacatalogProjectsLocationsTaxonomiesExportSecurity = field()
    

@dataclass
class DatacatalogProjectsLocationsTaxonomiesExportResponse:
    content_type: str = field()
    status_code: int = field()
    google_cloud_datacatalog_v1_export_taxonomies_response: Optional[shared.GoogleCloudDatacatalogV1ExportTaxonomiesResponse] = field(default=None)
    
