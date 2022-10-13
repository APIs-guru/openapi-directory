package shared

type SecretVersionStateEnum string

const (
	SecretVersionStateEnumStateUnspecified SecretVersionStateEnum = "STATE_UNSPECIFIED"
	SecretVersionStateEnumEnabled          SecretVersionStateEnum = "ENABLED"
	SecretVersionStateEnumDisabled         SecretVersionStateEnum = "DISABLED"
	SecretVersionStateEnumDestroyed        SecretVersionStateEnum = "DESTROYED"
)

type SecretVersion struct {
	CreateTime  *string                 `json:"createTime"`
	DestroyTime *string                 `json:"destroyTime"`
	Name        *string                 `json:"name"`
	State       *SecretVersionStateEnum `json:"state"`
}
