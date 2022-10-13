package shared

type BatchUpdateFormRequest struct {
	IncludeFormInResponse *bool         `json:"includeFormInResponse"`
	Requests              []Request     `json:"requests"`
	WriteControl          *WriteControl `json:"writeControl"`
}
