from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import restmethod
from . import jsonschema
from . import restresource
from . import jsonschema


@dataclass_json
@dataclass
class RestDescriptionAuthOauth2Scopes:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    

@dataclass_json
@dataclass
class RestDescriptionAuthOauth2:
    scopes: Optional[dict[str, RestDescriptionAuthOauth2Scopes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    

@dataclass_json
@dataclass
class RestDescriptionAuth:
    oauth2: Optional[RestDescriptionAuthOauth2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth2' }})
    

@dataclass_json
@dataclass
class RestDescriptionIcons:
    x16: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x16' }})
    x32: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'x32' }})
    

@dataclass_json
@dataclass
class RestDescription:
    auth: Optional[RestDescriptionAuth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth' }})
    base_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basePath' }})
    base_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseUrl' }})
    batch_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchPath' }})
    canonical_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canonicalName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    discovery_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discoveryVersion' }})
    documentation_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentationLink' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    exponential_backoff_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exponentialBackoffDefault' }})
    features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    icons: Optional[RestDescriptionIcons] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icons' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    methods: Optional[dict[str, restmethod.RestMethod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methods' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerDomain' }})
    owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerName' }})
    package_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packagePath' }})
    parameters: Optional[dict[str, jsonschema.JSONSchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocol' }})
    resources: Optional[dict[str, restresource.RestResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    root_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootUrl' }})
    schemas: Optional[dict[str, jsonschema.JSONSchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    service_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicePath' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    version_module: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version_module' }})
    
