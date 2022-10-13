package shared

type Target struct {
	Annotations      map[string]string `json:"annotations"`
	AnthosCluster    *AnthosCluster    `json:"anthosCluster"`
	CreateTime       *string           `json:"createTime"`
	Description      *string           `json:"description"`
	Etag             *string           `json:"etag"`
	ExecutionConfigs []ExecutionConfig `json:"executionConfigs"`
	Gke              *GkeCluster       `json:"gke"`
	Labels           map[string]string `json:"labels"`
	Name             *string           `json:"name"`
	RequireApproval  *bool             `json:"requireApproval"`
	Run              *CloudRunLocation `json:"run"`
	TargetID         *string           `json:"targetId"`
	UID              *string           `json:"uid"`
	UpdateTime       *string           `json:"updateTime"`
}
