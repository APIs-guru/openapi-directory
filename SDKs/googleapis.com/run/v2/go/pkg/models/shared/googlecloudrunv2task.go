package shared

type GoogleCloudRunV2TaskExecutionEnvironmentEnum string

const (
	GoogleCloudRunV2TaskExecutionEnvironmentEnumExecutionEnvironmentUnspecified GoogleCloudRunV2TaskExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
	GoogleCloudRunV2TaskExecutionEnvironmentEnumExecutionEnvironmentGen1        GoogleCloudRunV2TaskExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_GEN1"
	GoogleCloudRunV2TaskExecutionEnvironmentEnumExecutionEnvironmentGen2        GoogleCloudRunV2TaskExecutionEnvironmentEnum = "EXECUTION_ENVIRONMENT_GEN2"
)

// GoogleCloudRunV2Task
// Task represents a single run of a container to completion.
type GoogleCloudRunV2Task struct {
	Annotations          map[string]string                             `json:"annotations,omitempty"`
	CompletionTime       *string                                       `json:"completionTime,omitempty"`
	Conditions           []GoogleCloudRunV2Condition                   `json:"conditions,omitempty"`
	Containers           []GoogleCloudRunV2Container                   `json:"containers,omitempty"`
	CreateTime           *string                                       `json:"createTime,omitempty"`
	DeleteTime           *string                                       `json:"deleteTime,omitempty"`
	EncryptionKey        *string                                       `json:"encryptionKey,omitempty"`
	Etag                 *string                                       `json:"etag,omitempty"`
	Execution            *string                                       `json:"execution,omitempty"`
	ExecutionEnvironment *GoogleCloudRunV2TaskExecutionEnvironmentEnum `json:"executionEnvironment,omitempty"`
	ExpireTime           *string                                       `json:"expireTime,omitempty"`
	Generation           *string                                       `json:"generation,omitempty"`
	Index                *int32                                        `json:"index,omitempty"`
	Job                  *string                                       `json:"job,omitempty"`
	Labels               map[string]string                             `json:"labels,omitempty"`
	LastAttemptResult    *GoogleCloudRunV2TaskAttemptResult            `json:"lastAttemptResult,omitempty"`
	MaxRetries           *int32                                        `json:"maxRetries,omitempty"`
	Name                 *string                                       `json:"name,omitempty"`
	ObservedGeneration   *string                                       `json:"observedGeneration,omitempty"`
	Reconciling          *bool                                         `json:"reconciling,omitempty"`
	Retried              *int32                                        `json:"retried,omitempty"`
	ServiceAccount       *string                                       `json:"serviceAccount,omitempty"`
	StartTime            *string                                       `json:"startTime,omitempty"`
	Timeout              *string                                       `json:"timeout,omitempty"`
	UID                  *string                                       `json:"uid,omitempty"`
	UpdateTime           *string                                       `json:"updateTime,omitempty"`
	Volumes              []GoogleCloudRunV2Volume                      `json:"volumes,omitempty"`
	VpcAccess            *GoogleCloudRunV2VpcAccess                    `json:"vpcAccess,omitempty"`
}
