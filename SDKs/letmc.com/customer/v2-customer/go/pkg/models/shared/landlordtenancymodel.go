package shared

import (
"time")

type LandlordTenancyModel struct {
    ActualEndDate *time.Time `json:"ActualEndDate,omitempty"`
    Beds *int32 `json:"Beds,omitempty"`
    Bond *float64 `json:"Bond,omitempty"`
    BranchID *string `json:"BranchID,omitempty"`
    Certificates []LandlordMaintenanceCertificateModel `json:"Certificates,omitempty"`
    Documents []LettingsLandlordDocument `json:"Documents,omitempty"`
    FixedDate *time.Time `json:"FixedDate,omitempty"`
    GlobalReference *string `json:"GlobalReference,omitempty"`
    ID *string `json:"ID,omitempty"`
    Inspections []LandlordLettingsInspectionModel `json:"Inspections,omitempty"`
    ManagedRent *bool `json:"ManagedRent,omitempty"`
    Preferences []LandlordMaintenancePreferenceModel `json:"Preferences,omitempty"`
    PreviousRentAmount *float64 `json:"PreviousRentAmount,omitempty"`
    PropertyAddress *string `json:"PropertyAddress,omitempty"`
    Rent *string `json:"Rent,omitempty"`
    RentAmount *float64 `json:"RentAmount,omitempty"`
    StartDate *time.Time `json:"StartDate,omitempty"`
    TenancyProperty *string `json:"TenancyProperty,omitempty"`
    TenancyState *string `json:"TenancyState,omitempty"`
    Tenants []string `json:"Tenants,omitempty"`
    
}

