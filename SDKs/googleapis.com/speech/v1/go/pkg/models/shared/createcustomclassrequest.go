package shared

type CreateCustomClassRequest struct {
	CustomClass   *CustomClass `json:"customClass"`
	CustomClassID *string      `json:"customClassId"`
}
