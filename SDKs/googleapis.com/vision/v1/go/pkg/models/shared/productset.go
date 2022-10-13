package shared

type ProductSet struct {
	DisplayName *string `json:"displayName"`
	IndexError  *Status `json:"indexError"`
	IndexTime   *string `json:"indexTime"`
	Name        *string `json:"name"`
}
