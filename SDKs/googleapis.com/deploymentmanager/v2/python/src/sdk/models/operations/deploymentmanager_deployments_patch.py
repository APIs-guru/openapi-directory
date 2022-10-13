from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class DeploymentmanagerDeploymentsPatchPathParams:
    deployment: str = field(default=None, metadata={'path_param': { 'field_name': 'deployment', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    
class DeploymentmanagerDeploymentsPatchCreatePolicyEnum(str, Enum):
    CREATE_OR_ACQUIRE = "CREATE_OR_ACQUIRE"
    ACQUIRE = "ACQUIRE"

class DeploymentmanagerDeploymentsPatchDeletePolicyEnum(str, Enum):
    DELETE = "DELETE"
    ABANDON = "ABANDON"


@dataclass
class DeploymentmanagerDeploymentsPatchQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    create_policy: Optional[DeploymentmanagerDeploymentsPatchCreatePolicyEnum] = field(default=None, metadata={'query_param': { 'field_name': 'createPolicy', 'style': 'form', 'explode': True }})
    delete_policy: Optional[DeploymentmanagerDeploymentsPatchDeletePolicyEnum] = field(default=None, metadata={'query_param': { 'field_name': 'deletePolicy', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    preview: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'preview', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DeploymentmanagerDeploymentsPatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeploymentmanagerDeploymentsPatchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeploymentmanagerDeploymentsPatchSecurity:
    option1: Optional[DeploymentmanagerDeploymentsPatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeploymentmanagerDeploymentsPatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeploymentmanagerDeploymentsPatchRequest:
    path_params: DeploymentmanagerDeploymentsPatchPathParams = field(default=None)
    query_params: DeploymentmanagerDeploymentsPatchQueryParams = field(default=None)
    request: Optional[shared.Deployment] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DeploymentmanagerDeploymentsPatchSecurity = field(default=None)
    

@dataclass
class DeploymentmanagerDeploymentsPatchResponse:
    content_type: str = field(default=None)
    operation: Optional[shared.Operation] = field(default=None)
    status_code: int = field(default=None)
    
