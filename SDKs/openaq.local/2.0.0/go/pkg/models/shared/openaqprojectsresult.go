package shared

type OpenAqProjectsResult struct {
	Meta    *Meta         `json:"meta"`
	Results []ProjectsRow `json:"results"`
}
