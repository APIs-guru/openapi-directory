from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import approvalconfig
from . import bitbucketservertriggerconfig
from . import build
from . import gitfilesource
from . import githubeventsconfig
from . import gitlabeventsconfig
from . import pubsubconfig
from . import gitreposource
from . import reposource
from . import webhookconfig

class BuildTriggerEventTypeEnum(str, Enum):
    EVENT_TYPE_UNSPECIFIED = "EVENT_TYPE_UNSPECIFIED"
    REPO = "REPO"
    WEBHOOK = "WEBHOOK"
    PUBSUB = "PUBSUB"
    MANUAL = "MANUAL"

class BuildTriggerIncludeBuildLogsEnum(str, Enum):
    INCLUDE_BUILD_LOGS_UNSPECIFIED = "INCLUDE_BUILD_LOGS_UNSPECIFIED"
    INCLUDE_BUILD_LOGS_WITH_STATUS = "INCLUDE_BUILD_LOGS_WITH_STATUS"


@dataclass_json
@dataclass
class BuildTrigger:
    approval_config: Optional[approvalconfig.ApprovalConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalConfig' }})
    autodetect: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autodetect' }})
    bitbucket_server_trigger_config: Optional[bitbucketservertriggerconfig.BitbucketServerTriggerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitbucketServerTriggerConfig' }})
    build: Optional[build.Build] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    event_type: Optional[BuildTriggerEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    git_file_source: Optional[gitfilesource.GitFileSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitFileSource' }})
    github: Optional[githubeventsconfig.GitHubEventsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'github' }})
    gitlab_enterprise_events_config: Optional[gitlabeventsconfig.GitLabEventsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitlabEnterpriseEventsConfig' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ignored_files: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoredFiles' }})
    include_build_logs: Optional[BuildTriggerIncludeBuildLogsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeBuildLogs' }})
    included_files: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedFiles' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pubsub_config: Optional[pubsubconfig.PubsubConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubConfig' }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    source_to_build: Optional[gitreposource.GitRepoSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceToBuild' }})
    substitutions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'substitutions' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    trigger_template: Optional[reposource.RepoSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerTemplate' }})
    webhook_config: Optional[webhookconfig.WebhookConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookConfig' }})
    
