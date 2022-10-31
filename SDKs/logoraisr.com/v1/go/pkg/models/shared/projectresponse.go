package shared

type ProjectResponse struct {
	ProjectID     *int64  `json:"project_id,omitempty"`
	ProjectNumber *int64  `json:"project_number,omitempty"`
	ResultFileID  *string `json:"result_file_id,omitempty"`
}
