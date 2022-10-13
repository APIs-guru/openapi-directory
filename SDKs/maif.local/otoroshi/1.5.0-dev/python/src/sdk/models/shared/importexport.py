from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import globalconfig
from . import canary
from . import exposedapi
from . import chaosconfig
from . import clientconfig
from . import corssettings
from . import gzip
from . import healthcheck
from . import ipfiltering
from . import localjwtverifier
from . import refjwtverifier
from . import redirectionsettings
from . import hsalgosettings
from . import rsalgosettings
from . import esalgosettings
from . import jwksalgosettings
from . import statsdconfig
from . import target
from . import importexportstats


@dataclass_json
@dataclass
class ImportExportAdmins:
    created_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    registration: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registration' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class ImportExportAPIKeys:
    authorized_entities: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizedEntities' }})
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientName' }})
    client_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientSecret' }})
    daily_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dailyQuota' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    monthly_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthlyQuota' }})
    throttling_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'throttlingQuota' }})
    

@dataclass_json
@dataclass
class ImportExportErrorTemplates:
    messages: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    service_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceId' }})
    template40x: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template40x' }})
    template50x: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template50x' }})
    template_build: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateBuild' }})
    template_maintenance: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateMaintenance' }})
    

@dataclass_json
@dataclass
class ImportExportServiceDescriptors:
    canary: Optional[canary.Canary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Canary' }})
    additional_headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalHeaders' }})
    api: Optional[exposedapi.ExposedAPI] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    auth_config_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authConfigRef' }})
    build_mode: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildMode' }})
    chaos_config: Optional[chaosconfig.ChaosConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chaosConfig' }})
    client_config: Optional[clientconfig.ClientConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientConfig' }})
    client_validator_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientValidatorRef' }})
    cors: Optional[corssettings.CorsSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cors' }})
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    enforce_secure_communication: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforceSecureCommunication' }})
    env: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'env' }})
    force_https: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forceHttps' }})
    groups: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    gzip: Optional[gzip.Gzip] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gzip' }})
    headers_verification: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headersVerification' }})
    health_check: Optional[healthcheck.HealthCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthCheck' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip_filtering: Optional[ipfiltering.IPFiltering] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipFiltering' }})
    jwt_verifier: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jwtVerifier' }})
    local_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localHost' }})
    local_scheme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localScheme' }})
    maintenance_mode: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenanceMode' }})
    matching_headers: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchingHeaders' }})
    matching_root: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchingRoot' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    override_host: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overrideHost' }})
    private_app: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateApp' }})
    private_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privatePatterns' }})
    public_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicPatterns' }})
    redirect_to_local: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectToLocal' }})
    redirection: Optional[redirectionsettings.RedirectionSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirection' }})
    root: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'root' }})
    sec_com_excluded_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secComExcludedPatterns' }})
    sec_com_settings: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secComSettings' }})
    send_otoroshi_headers_back: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendOtoroshiHeadersBack' }})
    statsd_config: Optional[statsdconfig.StatsdConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statsdConfig' }})
    subdomain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subdomain' }})
    targets: List[target.Target] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    transformer_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transformerRef' }})
    user_facing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userFacing' }})
    x_forwarded_headers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xForwardedHeaders' }})
    

@dataclass_json
@dataclass
class ImportExportServiceGroups:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class ImportExportSimpleAdmins:
    created_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass_json
@dataclass
class ImportExport:
    admins: List[ImportExportAdmins] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admins' }})
    api_keys: List[ImportExportAPIKeys] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeys' }})
    app_config: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appConfig' }})
    config: globalconfig.GlobalConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_raw: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateRaw' }})
    error_templates: List[ImportExportErrorTemplates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorTemplates' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    service_descriptors: List[ImportExportServiceDescriptors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceDescriptors' }})
    service_groups: List[ImportExportServiceGroups] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceGroups' }})
    simple_admins: List[ImportExportSimpleAdmins] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simpleAdmins' }})
    stats: importexportstats.ImportExportStats = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    
