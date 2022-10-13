package shared

type SecretVersionStateEnum string

const (
	SecretVersionStateEnumStateUnspecified SecretVersionStateEnum = "STATE_UNSPECIFIED"
	SecretVersionStateEnumEnabled          SecretVersionStateEnum = "ENABLED"
	SecretVersionStateEnumDisabled         SecretVersionStateEnum = "DISABLED"
	SecretVersionStateEnumDestroyed        SecretVersionStateEnum = "DESTROYED"
)

type SecretVersion struct {
	ClientSpecifiedPayloadChecksum *bool                   `json:"clientSpecifiedPayloadChecksum"`
	CreateTime                     *string                 `json:"createTime"`
	DestroyTime                    *string                 `json:"destroyTime"`
	Etag                           *string                 `json:"etag"`
	Name                           *string                 `json:"name"`
	ReplicationStatus              *ReplicationStatus      `json:"replicationStatus"`
	State                          *SecretVersionStateEnum `json:"state"`
}
