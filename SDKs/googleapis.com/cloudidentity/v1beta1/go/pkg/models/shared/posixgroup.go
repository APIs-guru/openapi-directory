package shared

// PosixGroup
// POSIX Group definition to represent a group in a POSIX compliant system.
type PosixGroup struct {
	Gid      *string `json:"gid,omitempty"`
	Name     *string `json:"name,omitempty"`
	SystemID *string `json:"systemId,omitempty"`
}
