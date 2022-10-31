package shared

type SecretVersionStateEnum string

const (
	SecretVersionStateEnumStateUnspecified SecretVersionStateEnum = "STATE_UNSPECIFIED"
	SecretVersionStateEnumEnabled          SecretVersionStateEnum = "ENABLED"
	SecretVersionStateEnumDisabled         SecretVersionStateEnum = "DISABLED"
	SecretVersionStateEnumDestroyed        SecretVersionStateEnum = "DESTROYED"
)

type SecretVersion struct {
	CreateTime  *string                 `json:"createTime,omitempty"`
	DestroyTime *string                 `json:"destroyTime,omitempty"`
	Name        *string                 `json:"name,omitempty"`
	State       *SecretVersionStateEnum `json:"state,omitempty"`
}
