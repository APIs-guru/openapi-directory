package shared

type UserDataMapping struct {
	ArchiveTime        *string     `json:"archiveTime"`
	Archived           *bool       `json:"archived"`
	DataID             *string     `json:"dataId"`
	Name               *string     `json:"name"`
	ResourceAttributes []Attribute `json:"resourceAttributes"`
	UserID             *string     `json:"userId"`
}
