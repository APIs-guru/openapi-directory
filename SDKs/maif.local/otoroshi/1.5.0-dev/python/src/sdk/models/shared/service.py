from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Service:
    r"""Service
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
    
