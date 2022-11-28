from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""BuildTrigger
    Configuration for an automated build in response to source repository changes.
    """
    
    approval_config: Optional[ApprovalConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalConfig') }})
    autodetect: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autodetect') }})
    bitbucket_server_trigger_config: Optional[BitbucketServerTriggerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitbucketServerTriggerConfig') }})
    build: Optional[Build] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    event_type: Optional[BuildTriggerEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    git_file_source: Optional[GitFileSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitFileSource') }})
    github: Optional[GitHubEventsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('github') }})
    gitlab_enterprise_events_config: Optional[GitLabEventsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitlabEnterpriseEventsConfig') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ignored_files: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoredFiles') }})
    include_build_logs: Optional[BuildTriggerIncludeBuildLogsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeBuildLogs') }})
    included_files: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedFiles') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pubsub_config: Optional[PubsubConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubConfig') }})
    repository_event_config: Optional[RepositoryEventConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryEventConfig') }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    source_to_build: Optional[GitRepoSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceToBuild') }})
    substitutions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('substitutions') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    trigger_template: Optional[RepoSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerTemplate') }})
    webhook_config: Optional[WebhookConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookConfig') }})
    

@dataclass_json
@dataclass
class BuildTriggerInput:
    r"""BuildTriggerInput
    Configuration for an automated build in response to source repository changes.
    """
    
    approval_config: Optional[ApprovalConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalConfig') }})
    autodetect: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autodetect') }})
    bitbucket_server_trigger_config: Optional[BitbucketServerTriggerConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitbucketServerTriggerConfig') }})
    build: Optional[BuildInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('build') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    event_type: Optional[BuildTriggerEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    git_file_source: Optional[GitFileSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitFileSource') }})
    github: Optional[GitHubEventsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('github') }})
    gitlab_enterprise_events_config: Optional[GitLabEventsConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitlabEnterpriseEventsConfig') }})
    ignored_files: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoredFiles') }})
    include_build_logs: Optional[BuildTriggerIncludeBuildLogsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeBuildLogs') }})
    included_files: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedFiles') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pubsub_config: Optional[PubsubConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pubsubConfig') }})
    repository_event_config: Optional[RepositoryEventConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryEventConfig') }})
    resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceName') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    source_to_build: Optional[GitRepoSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceToBuild') }})
    substitutions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('substitutions') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    trigger_template: Optional[RepoSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggerTemplate') }})
    webhook_config: Optional[WebhookConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookConfig') }})
    
