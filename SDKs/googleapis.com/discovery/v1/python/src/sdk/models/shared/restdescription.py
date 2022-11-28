from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RestDescriptionAuthOauth2Scopes:
    r"""RestDescriptionAuthOauth2Scopes
    The scope value.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclass
class RestDescriptionAuthOauth2:
    r"""RestDescriptionAuthOauth2
    OAuth 2.0 authentication information.
    """
    
    scopes: Optional[dict[str, RestDescriptionAuthOauth2Scopes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    

@dataclass_json
@dataclass
class RestDescriptionAuth:
    r"""RestDescriptionAuth
    Authentication information.
    """
    
    oauth2: Optional[RestDescriptionAuthOauth2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth2') }})
    

@dataclass_json
@dataclass
class RestDescriptionIcons:
    r"""RestDescriptionIcons
    Links to 16x16 and 32x32 icons representing the API.
    """
    
    x16: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x16') }})
    x32: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x32') }})
    

@dataclass_json
@dataclass
class RestDescription:
    auth: Optional[RestDescriptionAuth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth') }})
    base_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basePath') }})
    base_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseUrl') }})
    batch_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchPath') }})
    canonical_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canonicalName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    discovery_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discoveryVersion') }})
    documentation_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentationLink') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    exponential_backoff_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exponentialBackoffDefault') }})
    features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    icons: Optional[RestDescriptionIcons] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icons') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    methods: Optional[dict[str, RestMethod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methods') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    owner_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerDomain') }})
    owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerName') }})
    package_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packagePath') }})
    parameters: Optional[dict[str, JSONSchema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    resources: Optional[dict[str, RestResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    root_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rootUrl') }})
    schemas: Optional[dict[str, JSONSchema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    service_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('servicePath') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    version_module: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version_module') }})
    
