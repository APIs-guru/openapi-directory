package shared

type Script struct {
	Code map[string]string `json:"code"`
	Desc map[string]string `json:"desc"`
	ID   string            `json:"id"`
	Name string            `json:"name"`
}
