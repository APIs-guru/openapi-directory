from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import webhook
from . import webhook
from . import auth0config
from . import cleversettings
from . import elasticconfig
from . import elasticconfig
from . import ipfiltering
from . import mailersettings
from . import auth0config


@dataclass_json
@dataclass
class GlobalConfig:
    alerts_emails: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertsEmails' }})
    alerts_webhooks: List[webhook.Webhook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertsWebhooks' }})
    analytics_webhooks: List[webhook.Webhook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyticsWebhooks' }})
    api_read_only: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiReadOnly' }})
    auto_link_to_default_group: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoLinkToDefaultGroup' }})
    backoffice_auth0_config: Optional[auth0config.Auth0Config] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backofficeAuth0Config' }})
    clever_settings: Optional[cleversettings.CleverSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cleverSettings' }})
    elastic_reads_config: Optional[elasticconfig.ElasticConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elasticReadsConfig' }})
    elastic_writes_configs: Optional[List[elasticconfig.ElasticConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elasticWritesConfigs' }})
    endless_ip_addresses: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endlessIpAddresses' }})
    ip_filtering: ipfiltering.IPFiltering = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipFiltering' }})
    limit_concurrent_requests: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitConcurrentRequests' }})
    lines: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lines' }})
    mailer_settings: Optional[mailersettings.MailerSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mailerSettings' }})
    max_concurrent_requests: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxConcurrentRequests' }})
    max_http10_response_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxHttp10ResponseSize' }})
    max_logs_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxLogsSize' }})
    middle_fingers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'middleFingers' }})
    per_ip_throttling_quota: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'perIpThrottlingQuota' }})
    private_apps_auth0_config: Optional[auth0config.Auth0Config] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateAppsAuth0Config' }})
    stream_entity_only: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamEntityOnly' }})
    throttling_quota: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'throttlingQuota' }})
    u2f_login_only: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'u2fLoginOnly' }})
    use_circuit_breakers: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useCircuitBreakers' }})
    
