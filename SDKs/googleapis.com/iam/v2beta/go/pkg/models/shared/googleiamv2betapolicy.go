package shared

type GoogleIamV2betaPolicy struct {
	Annotations map[string]string           `json:"annotations"`
	CreateTime  *string                     `json:"createTime"`
	DeleteTime  *string                     `json:"deleteTime"`
	DisplayName *string                     `json:"displayName"`
	Etag        *string                     `json:"etag"`
	Kind        *string                     `json:"kind"`
	Name        *string                     `json:"name"`
	Rules       []GoogleIamV2betaPolicyRule `json:"rules"`
	UID         *string                     `json:"uid"`
	UpdateTime  *string                     `json:"updateTime"`
}
