package shared

type ServiceGroupViewModel struct {
	CompanyID   *string `json:"companyId"`
	Description *string `json:"description"`
	ID          *string `json:"id"`
	ImageURL    *string `json:"imageUrl"`
	Label       *string `json:"label"`
	LocationID  *string `json:"locationId"`
	Name        *string `json:"name"`
	ObjectName  *string `json:"objectName"`
}
