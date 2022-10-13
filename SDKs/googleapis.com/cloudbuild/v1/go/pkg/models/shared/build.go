package shared

type BuildStatusEnum string

const (
	BuildStatusEnumStatusUnknown BuildStatusEnum = "STATUS_UNKNOWN"
	BuildStatusEnumPending       BuildStatusEnum = "PENDING"
	BuildStatusEnumQueued        BuildStatusEnum = "QUEUED"
	BuildStatusEnumWorking       BuildStatusEnum = "WORKING"
	BuildStatusEnumSuccess       BuildStatusEnum = "SUCCESS"
	BuildStatusEnumFailure       BuildStatusEnum = "FAILURE"
	BuildStatusEnumInternalError BuildStatusEnum = "INTERNAL_ERROR"
	BuildStatusEnumTimeout       BuildStatusEnum = "TIMEOUT"
	BuildStatusEnumCancelled     BuildStatusEnum = "CANCELLED"
	BuildStatusEnumExpired       BuildStatusEnum = "EXPIRED"
)

type Build struct {
	Approval         *BuildApproval      `json:"approval"`
	Artifacts        *Artifacts          `json:"artifacts"`
	AvailableSecrets *Secrets            `json:"availableSecrets"`
	BuildTriggerID   *string             `json:"buildTriggerId"`
	CreateTime       *string             `json:"createTime"`
	FailureInfo      *FailureInfo        `json:"failureInfo"`
	FinishTime       *string             `json:"finishTime"`
	ID               *string             `json:"id"`
	Images           []string            `json:"images"`
	LogURL           *string             `json:"logUrl"`
	LogsBucket       *string             `json:"logsBucket"`
	Name             *string             `json:"name"`
	Options          *BuildOptions       `json:"options"`
	ProjectID        *string             `json:"projectId"`
	QueueTTL         *string             `json:"queueTtl"`
	Results          *Results            `json:"results"`
	Secrets          []Secret            `json:"secrets"`
	ServiceAccount   *string             `json:"serviceAccount"`
	Source           *Source             `json:"source"`
	SourceProvenance *SourceProvenance   `json:"sourceProvenance"`
	StartTime        *string             `json:"startTime"`
	Status           *BuildStatusEnum    `json:"status"`
	StatusDetail     *string             `json:"statusDetail"`
	Steps            []BuildStep         `json:"steps"`
	Substitutions    map[string]string   `json:"substitutions"`
	Tags             []string            `json:"tags"`
	Timeout          *string             `json:"timeout"`
	Timing           map[string]TimeSpan `json:"timing"`
	Warnings         []Warning           `json:"warnings"`
}
