package shared

type BuildTriggerEventTypeEnum string

const (
	BuildTriggerEventTypeEnumEventTypeUnspecified BuildTriggerEventTypeEnum = "EVENT_TYPE_UNSPECIFIED"
	BuildTriggerEventTypeEnumRepo                 BuildTriggerEventTypeEnum = "REPO"
	BuildTriggerEventTypeEnumWebhook              BuildTriggerEventTypeEnum = "WEBHOOK"
	BuildTriggerEventTypeEnumPubsub               BuildTriggerEventTypeEnum = "PUBSUB"
	BuildTriggerEventTypeEnumManual               BuildTriggerEventTypeEnum = "MANUAL"
)

type BuildTriggerIncludeBuildLogsEnum string

const (
	BuildTriggerIncludeBuildLogsEnumIncludeBuildLogsUnspecified BuildTriggerIncludeBuildLogsEnum = "INCLUDE_BUILD_LOGS_UNSPECIFIED"
	BuildTriggerIncludeBuildLogsEnumIncludeBuildLogsWithStatus  BuildTriggerIncludeBuildLogsEnum = "INCLUDE_BUILD_LOGS_WITH_STATUS"
)

type BuildTrigger struct {
	ApprovalConfig               *ApprovalConfig                   `json:"approvalConfig,omitempty"`
	Autodetect                   *bool                             `json:"autodetect,omitempty"`
	BitbucketServerTriggerConfig *BitbucketServerTriggerConfig     `json:"bitbucketServerTriggerConfig,omitempty"`
	Build                        *Build                            `json:"build,omitempty"`
	CreateTime                   *string                           `json:"createTime,omitempty"`
	Description                  *string                           `json:"description,omitempty"`
	Disabled                     *bool                             `json:"disabled,omitempty"`
	EventType                    *BuildTriggerEventTypeEnum        `json:"eventType,omitempty"`
	Filename                     *string                           `json:"filename,omitempty"`
	Filter                       *string                           `json:"filter,omitempty"`
	GitFileSource                *GitFileSource                    `json:"gitFileSource,omitempty"`
	Github                       *GitHubEventsConfig               `json:"github,omitempty"`
	GitlabEnterpriseEventsConfig *GitLabEventsConfig               `json:"gitlabEnterpriseEventsConfig,omitempty"`
	ID                           *string                           `json:"id,omitempty"`
	IgnoredFiles                 []string                          `json:"ignoredFiles,omitempty"`
	IncludeBuildLogs             *BuildTriggerIncludeBuildLogsEnum `json:"includeBuildLogs,omitempty"`
	IncludedFiles                []string                          `json:"includedFiles,omitempty"`
	Name                         *string                           `json:"name,omitempty"`
	PubsubConfig                 *PubsubConfig                     `json:"pubsubConfig,omitempty"`
	ResourceName                 *string                           `json:"resourceName,omitempty"`
	ServiceAccount               *string                           `json:"serviceAccount,omitempty"`
	SourceToBuild                *GitRepoSource                    `json:"sourceToBuild,omitempty"`
	Substitutions                map[string]string                 `json:"substitutions,omitempty"`
	Tags                         []string                          `json:"tags,omitempty"`
	TriggerTemplate              *RepoSource                       `json:"triggerTemplate,omitempty"`
	WebhookConfig                *WebhookConfig                    `json:"webhookConfig,omitempty"`
}
