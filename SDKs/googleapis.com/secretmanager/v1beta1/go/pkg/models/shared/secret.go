package shared

type Secret struct {
	CreateTime  *string           `json:"createTime"`
	Labels      map[string]string `json:"labels"`
	Name        *string           `json:"name"`
	Replication *Replication      `json:"replication"`
}
