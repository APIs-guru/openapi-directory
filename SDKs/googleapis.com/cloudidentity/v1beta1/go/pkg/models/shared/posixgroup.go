package shared

type PosixGroup struct {
	Gid      *string `json:"gid"`
	Name     *string `json:"name"`
	SystemID *string `json:"systemId"`
}
