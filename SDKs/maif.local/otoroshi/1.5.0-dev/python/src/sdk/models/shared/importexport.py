from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImportExportAdmins:
    r"""ImportExportAdmins
    Administrator using FIDO U2F device to access Otoroshi
    """
    
    created_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    registration: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class ImportExportAPIKeys:
    r"""ImportExportAPIKeys
    An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.
    """
    
    authorized_entities: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizedEntities') }})
    client_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientId') }})
    client_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientName') }})
    client_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientSecret') }})
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    daily_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dailyQuota') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    monthly_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthlyQuota') }})
    throttling_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('throttlingQuota') }})
    

@dataclass_json
@dataclass
class ImportExportErrorTemplates:
    r"""ImportExportErrorTemplates
    Error templates for a service descriptor
    """
    
    messages: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    service_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceId') }})
    template40x: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template40x') }})
    template50x: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template50x') }})
    template_build: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateBuild') }})
    template_maintenance: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateMaintenance') }})
    

@dataclass_json
@dataclass
class ImportExportServiceDescriptors:
    r"""ImportExportServiceDescriptors
    An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism
    """
    
    build_mode: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildMode') }})
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    enforce_secure_communication: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enforceSecureCommunication') }})
    env: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('env') }})
    force_https: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('forceHttps') }})
    groups: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    maintenance_mode: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceMode') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    private_app: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateApp') }})
    root: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('root') }})
    subdomain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subdomain') }})
    targets: List[Target] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    canary: Optional[Canary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Canary') }})
    additional_headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalHeaders') }})
    api: Optional[ExposedAPI] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    auth_config_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authConfigRef') }})
    chaos_config: Optional[ChaosConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chaosConfig') }})
    client_config: Optional[ClientConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientConfig') }})
    client_validator_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientValidatorRef') }})
    cors: Optional[CorsSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cors') }})
    gzip: Optional[Gzip] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gzip') }})
    headers_verification: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headersVerification') }})
    health_check: Optional[HealthCheck] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthCheck') }})
    ip_filtering: Optional[IPFiltering] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipFiltering') }})
    jwt_verifier: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jwtVerifier') }})
    local_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localHost') }})
    local_scheme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localScheme') }})
    matching_headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchingHeaders') }})
    matching_root: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchingRoot') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    override_host: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideHost') }})
    private_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privatePatterns') }})
    public_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicPatterns') }})
    redirect_to_local: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirectToLocal') }})
    redirection: Optional[RedirectionSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirection') }})
    sec_com_excluded_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secComExcludedPatterns') }})
    sec_com_settings: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secComSettings') }})
    send_otoroshi_headers_back: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendOtoroshiHeadersBack') }})
    statsd_config: Optional[StatsdConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statsdConfig') }})
    transformer_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformerRef') }})
    user_facing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userFacing') }})
    x_forwarded_headers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xForwardedHeaders') }})
    

@dataclass_json
@dataclass
class ImportExportServiceGroups:
    r"""ImportExportServiceGroups
    An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclass
class ImportExportSimpleAdmins:
    r"""ImportExportSimpleAdmins
    Administrator using just login/password tuple to access Otoroshi
    """
    
    created_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    password: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class ImportExport:
    r"""ImportExport
    The structure that can be imported to or exported from Otoroshi. It represent the memory state of Otoroshi
    """
    
    admins: List[ImportExportAdmins] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('admins') }})
    api_keys: List[ImportExportAPIKeys] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeys') }})
    config: GlobalConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    date_: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_raw: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRaw') }})
    error_templates: List[ImportExportErrorTemplates] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorTemplates') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    service_descriptors: List[ImportExportServiceDescriptors] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceDescriptors') }})
    service_groups: List[ImportExportServiceGroups] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceGroups') }})
    simple_admins: List[ImportExportSimpleAdmins] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleAdmins') }})
    stats: ImportExportStats = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    app_config: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appConfig') }})
    
