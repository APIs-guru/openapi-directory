package shared

type AuthorizationPolicyActionEnum string

const (
	AuthorizationPolicyActionEnumActionUnspecified AuthorizationPolicyActionEnum = "ACTION_UNSPECIFIED"
	AuthorizationPolicyActionEnumAllow             AuthorizationPolicyActionEnum = "ALLOW"
	AuthorizationPolicyActionEnumDeny              AuthorizationPolicyActionEnum = "DENY"
)

// AuthorizationPolicy
// AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https proxy or endpoint config selector resource.
type AuthorizationPolicy struct {
	Action      *AuthorizationPolicyActionEnum `json:"action,omitempty"`
	CreateTime  *string                        `json:"createTime,omitempty"`
	Description *string                        `json:"description,omitempty"`
	Labels      map[string]string              `json:"labels,omitempty"`
	Name        *string                        `json:"name,omitempty"`
	Rules       []Rule                         `json:"rules,omitempty"`
	UpdateTime  *string                        `json:"updateTime,omitempty"`
}

// AuthorizationPolicyInput
// AuthorizationPolicy is a resource that specifies how a server should authorize incoming connections. This resource in itself does not change the configuration unless it's attached to a target https proxy or endpoint config selector resource.
type AuthorizationPolicyInput struct {
	Action      *AuthorizationPolicyActionEnum `json:"action,omitempty"`
	Description *string                        `json:"description,omitempty"`
	Labels      map[string]string              `json:"labels,omitempty"`
	Name        *string                        `json:"name,omitempty"`
	Rules       []Rule                         `json:"rules,omitempty"`
}
