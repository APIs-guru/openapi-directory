package shared

import (
	"time"
)

type LandlordTenancyModel struct {
	ActualEndDate      *time.Time                            `json:"ActualEndDate"`
	Beds               *int32                                `json:"Beds"`
	Bond               *float64                              `json:"Bond"`
	BranchID           *string                               `json:"BranchID"`
	Certificates       []LandlordMaintenanceCertificateModel `json:"Certificates"`
	Documents          []LettingsLandlordDocument            `json:"Documents"`
	FixedDate          *time.Time                            `json:"FixedDate"`
	GlobalReference    *string                               `json:"GlobalReference"`
	ID                 *string                               `json:"ID"`
	Inspections        []LandlordLettingsInspectionModel     `json:"Inspections"`
	ManagedRent        *bool                                 `json:"ManagedRent"`
	Preferences        []LandlordMaintenancePreferenceModel  `json:"Preferences"`
	PreviousRentAmount *float64                              `json:"PreviousRentAmount"`
	PropertyAddress    *string                               `json:"PropertyAddress"`
	Rent               *string                               `json:"Rent"`
	RentAmount         *float64                              `json:"RentAmount"`
	StartDate          *time.Time                            `json:"StartDate"`
	TenancyProperty    *string                               `json:"TenancyProperty"`
	TenancyState       *string                               `json:"TenancyState"`
	Tenants            []string                              `json:"Tenants"`
}
