from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GlobalConfig:
    r"""GlobalConfig
    The global config object of Otoroshi, used to customize settings of the current Otoroshi instance
    """
    
    alerts_emails: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertsEmails') }})
    alerts_webhooks: List[Webhook] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertsWebhooks') }})
    analytics_webhooks: List[Webhook] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyticsWebhooks') }})
    api_read_only: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiReadOnly') }})
    auto_link_to_default_group: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoLinkToDefaultGroup') }})
    endless_ip_addresses: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endlessIpAddresses') }})
    ip_filtering: IPFiltering = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipFiltering') }})
    limit_concurrent_requests: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitConcurrentRequests') }})
    max_concurrent_requests: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxConcurrentRequests') }})
    per_ip_throttling_quota: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('perIpThrottlingQuota') }})
    stream_entity_only: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamEntityOnly') }})
    throttling_quota: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('throttlingQuota') }})
    u2f_login_only: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('u2fLoginOnly') }})
    use_circuit_breakers: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('useCircuitBreakers') }})
    backoffice_auth0_config: Optional[Auth0Config] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backofficeAuth0Config') }})
    clever_settings: Optional[CleverSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cleverSettings') }})
    elastic_reads_config: Optional[ElasticConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elasticReadsConfig') }})
    elastic_writes_configs: Optional[List[ElasticConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elasticWritesConfigs') }})
    lines: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lines') }})
    mailer_settings: Optional[MailerSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailerSettings') }})
    max_http10_response_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxHttp10ResponseSize') }})
    max_logs_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLogsSize') }})
    middle_fingers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middleFingers') }})
    private_apps_auth0_config: Optional[Auth0Config] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateAppsAuth0Config') }})
    
