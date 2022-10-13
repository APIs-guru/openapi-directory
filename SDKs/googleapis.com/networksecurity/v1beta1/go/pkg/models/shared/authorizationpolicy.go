package shared

type AuthorizationPolicyActionEnum string

const (
	AuthorizationPolicyActionEnumActionUnspecified AuthorizationPolicyActionEnum = "ACTION_UNSPECIFIED"
	AuthorizationPolicyActionEnumAllow             AuthorizationPolicyActionEnum = "ALLOW"
	AuthorizationPolicyActionEnumDeny              AuthorizationPolicyActionEnum = "DENY"
)

type AuthorizationPolicy struct {
	Action      *AuthorizationPolicyActionEnum `json:"action"`
	CreateTime  *string                        `json:"createTime"`
	Description *string                        `json:"description"`
	Labels      map[string]string              `json:"labels"`
	Name        *string                        `json:"name"`
	Rules       []Rule                         `json:"rules"`
	UpdateTime  *string                        `json:"updateTime"`
}
