package shared




type BuildStatusEnum string

const (
    BuildStatusEnumStatusUnknown BuildStatusEnum = "STATUS_UNKNOWN"
BuildStatusEnumPending BuildStatusEnum = "PENDING"
BuildStatusEnumQueued BuildStatusEnum = "QUEUED"
BuildStatusEnumWorking BuildStatusEnum = "WORKING"
BuildStatusEnumSuccess BuildStatusEnum = "SUCCESS"
BuildStatusEnumFailure BuildStatusEnum = "FAILURE"
BuildStatusEnumInternalError BuildStatusEnum = "INTERNAL_ERROR"
BuildStatusEnumTimeout BuildStatusEnum = "TIMEOUT"
BuildStatusEnumCancelled BuildStatusEnum = "CANCELLED"
BuildStatusEnumExpired BuildStatusEnum = "EXPIRED"
)


type Build struct {
    Approval *BuildApproval `json:"approval,omitempty"`
    Artifacts *Artifacts `json:"artifacts,omitempty"`
    AvailableSecrets *Secrets `json:"availableSecrets,omitempty"`
    BuildTriggerID *string `json:"buildTriggerId,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    FailureInfo *FailureInfo `json:"failureInfo,omitempty"`
    FinishTime *string `json:"finishTime,omitempty"`
    ID *string `json:"id,omitempty"`
    Images []string `json:"images,omitempty"`
    LogURL *string `json:"logUrl,omitempty"`
    LogsBucket *string `json:"logsBucket,omitempty"`
    Name *string `json:"name,omitempty"`
    Options *BuildOptions `json:"options,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    QueueTTL *string `json:"queueTtl,omitempty"`
    Results *Results `json:"results,omitempty"`
    Secrets []Secret `json:"secrets,omitempty"`
    ServiceAccount *string `json:"serviceAccount,omitempty"`
    Source *Source `json:"source,omitempty"`
    SourceProvenance *SourceProvenance `json:"sourceProvenance,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    Status *BuildStatusEnum `json:"status,omitempty"`
    StatusDetail *string `json:"statusDetail,omitempty"`
    Steps []BuildStep `json:"steps,omitempty"`
    Substitutions map[string]string `json:"substitutions,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Timeout *string `json:"timeout,omitempty"`
    Timing map[string]TimeSpan `json:"timing,omitempty"`
    Warnings []Warning `json:"warnings,omitempty"`
    
}

