package shared

type ProjectResponse struct {
	ProjectID     *int64  `json:"project_id"`
	ProjectNumber *int64  `json:"project_number"`
	ResultFileID  *string `json:"result_file_id"`
}
