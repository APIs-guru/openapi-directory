package shared

type CloneVersionRequest struct {
	Exclude       *PathFilter `json:"exclude"`
	Finalize      *bool       `json:"finalize"`
	Include       *PathFilter `json:"include"`
	SourceVersion *string     `json:"sourceVersion"`
}
