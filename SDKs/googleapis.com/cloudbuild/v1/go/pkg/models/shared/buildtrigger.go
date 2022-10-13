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
	ApprovalConfig               *ApprovalConfig                   `json:"approvalConfig"`
	Autodetect                   *bool                             `json:"autodetect"`
	BitbucketServerTriggerConfig *BitbucketServerTriggerConfig     `json:"bitbucketServerTriggerConfig"`
	Build                        *Build                            `json:"build"`
	CreateTime                   *string                           `json:"createTime"`
	Description                  *string                           `json:"description"`
	Disabled                     *bool                             `json:"disabled"`
	EventType                    *BuildTriggerEventTypeEnum        `json:"eventType"`
	Filename                     *string                           `json:"filename"`
	Filter                       *string                           `json:"filter"`
	GitFileSource                *GitFileSource                    `json:"gitFileSource"`
	Github                       *GitHubEventsConfig               `json:"github"`
	GitlabEnterpriseEventsConfig *GitLabEventsConfig               `json:"gitlabEnterpriseEventsConfig"`
	ID                           *string                           `json:"id"`
	IgnoredFiles                 []string                          `json:"ignoredFiles"`
	IncludeBuildLogs             *BuildTriggerIncludeBuildLogsEnum `json:"includeBuildLogs"`
	IncludedFiles                []string                          `json:"includedFiles"`
	Name                         *string                           `json:"name"`
	PubsubConfig                 *PubsubConfig                     `json:"pubsubConfig"`
	ResourceName                 *string                           `json:"resourceName"`
	ServiceAccount               *string                           `json:"serviceAccount"`
	SourceToBuild                *GitRepoSource                    `json:"sourceToBuild"`
	Substitutions                map[string]string                 `json:"substitutions"`
	Tags                         []string                          `json:"tags"`
	TriggerTemplate              *RepoSource                       `json:"triggerTemplate"`
	WebhookConfig                *WebhookConfig                    `json:"webhookConfig"`
}
