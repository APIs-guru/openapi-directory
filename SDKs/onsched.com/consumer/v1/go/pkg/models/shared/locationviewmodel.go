package shared

type LocationViewModel struct {
	AdminEmail        *string  `json:"adminEmail"`
	AdminName         *string  `json:"adminName"`
	CompanyID         *string  `json:"companyId"`
	CompanyName       *string  `json:"companyName"`
	Email             *string  `json:"email"`
	Fax               *string  `json:"fax"`
	FriendlyID        *string  `json:"friendlyId"`
	ID                *string  `json:"id"`
	ImageURL          *string  `json:"imageUrl"`
	Latitude          *float64 `json:"latitude"`
	Logo              *string  `json:"logo"`
	Longitude         *float64 `json:"longitude"`
	MaxCapacity       *int32   `json:"maxCapacity"`
	MaxGroupSize      *int32   `json:"maxGroupSize"`
	Name              *string  `json:"name"`
	ObjectName        *string  `json:"objectName"`
	Phone             *string  `json:"phone"`
	PrimaryBusiness   *bool    `json:"primaryBusiness"`
	PrimaryCalendarID *string  `json:"primaryCalendarId"`
	RegionID          *string  `json:"regionId"`
	TimezoneIana      *string  `json:"timezoneIana"`
	TimezoneID        *string  `json:"timezoneId"`
	TimezoneOffset    *int32   `json:"timezoneOffset"`
	Website           *string  `json:"website"`
}
