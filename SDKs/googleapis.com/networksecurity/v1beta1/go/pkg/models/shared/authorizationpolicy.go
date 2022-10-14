package shared

type AuthorizationPolicyActionEnum string

const (
	AuthorizationPolicyActionEnumActionUnspecified AuthorizationPolicyActionEnum = "ACTION_UNSPECIFIED"
	AuthorizationPolicyActionEnumAllow             AuthorizationPolicyActionEnum = "ALLOW"
	AuthorizationPolicyActionEnumDeny              AuthorizationPolicyActionEnum = "DENY"
)

type AuthorizationPolicy struct {
	Action      *AuthorizationPolicyActionEnum `json:"action,omitempty"`
	CreateTime  *string                        `json:"createTime,omitempty"`
	Description *string                        `json:"description,omitempty"`
	Labels      map[string]string              `json:"labels,omitempty"`
	Name        *string                        `json:"name,omitempty"`
	Rules       []Rule                         `json:"rules,omitempty"`
	UpdateTime  *string                        `json:"updateTime,omitempty"`
}
