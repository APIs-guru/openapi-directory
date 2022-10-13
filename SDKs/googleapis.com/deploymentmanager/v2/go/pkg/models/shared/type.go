package shared

type Type struct {
	ID         *string    `json:"id"`
	InsertTime *string    `json:"insertTime"`
	Name       *string    `json:"name"`
	Operation  *Operation `json:"operation"`
	SelfLink   *string    `json:"selfLink"`
}
