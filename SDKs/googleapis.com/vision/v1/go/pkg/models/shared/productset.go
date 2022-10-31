package shared

type ProductSet struct {
	DisplayName *string `json:"displayName,omitempty"`
	IndexError  *Status `json:"indexError,omitempty"`
	IndexTime   *string `json:"indexTime,omitempty"`
	Name        *string `json:"name,omitempty"`
}
