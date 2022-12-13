package shared

import (
	"time"
)

type GroupEditRequestBusinessDetailsEmployerTypeEnum string

const (
	GroupEditRequestBusinessDetailsEmployerTypeEnumForeignGovernment GroupEditRequestBusinessDetailsEmployerTypeEnum = "foreign_government"
	GroupEditRequestBusinessDetailsEmployerTypeEnumPrivateSector     GroupEditRequestBusinessDetailsEmployerTypeEnum = "private_sector"
	GroupEditRequestBusinessDetailsEmployerTypeEnumReligiousEmployer GroupEditRequestBusinessDetailsEmployerTypeEnum = "religious_employer"
	GroupEditRequestBusinessDetailsEmployerTypeEnumStateGovernment   GroupEditRequestBusinessDetailsEmployerTypeEnum = "state_government"
	GroupEditRequestBusinessDetailsEmployerTypeEnumTribalGovernment  GroupEditRequestBusinessDetailsEmployerTypeEnum = "tribal_government"
)

type GroupEditRequestBusinessDetailsEntityTypeEnum string

const (
	GroupEditRequestBusinessDetailsEntityTypeEnumCCorp       GroupEditRequestBusinessDetailsEntityTypeEnum = "c_corp"
	GroupEditRequestBusinessDetailsEntityTypeEnumLlc         GroupEditRequestBusinessDetailsEntityTypeEnum = "llc"
	GroupEditRequestBusinessDetailsEntityTypeEnumLlp         GroupEditRequestBusinessDetailsEntityTypeEnum = "llp"
	GroupEditRequestBusinessDetailsEntityTypeEnumPartnership GroupEditRequestBusinessDetailsEntityTypeEnum = "partnership"
	GroupEditRequestBusinessDetailsEntityTypeEnumSCorp       GroupEditRequestBusinessDetailsEntityTypeEnum = "s_corp"
)

// GroupEditRequestBusinessDetails
// Details about business or industry of the group
type GroupEditRequestBusinessDetails struct {
	CompanyDescription *string                                          `json:"company_description,omitempty"`
	DateEstablished    *time.Time                                       `json:"date_established,omitempty"`
	EmployerType       *GroupEditRequestBusinessDetailsEmployerTypeEnum `json:"employer_type,omitempty"`
	EntityType         *GroupEditRequestBusinessDetailsEntityTypeEnum   `json:"entity_type,omitempty"`
}

// GroupEditRequestInsuranceDetails
// General details about the group insurance offerings
type GroupEditRequestInsuranceDetails struct {
	IsErisaCompliant *bool `json:"is_erisa_compliant,omitempty"`
	IsErisaSubject   *bool `json:"is_erisa_subject,omitempty"`
}

type GroupEditRequest struct {
	BusinessDetails  *GroupEditRequestBusinessDetails  `json:"business_details,omitempty"`
	DbaName          *string                           `json:"dba_name,omitempty"`
	FederalEin       *string                           `json:"federal_ein,omitempty"`
	InsuranceDetails *GroupEditRequestInsuranceDetails `json:"insurance_details,omitempty"`
	Name             *string                           `json:"name,omitempty"`
	SicCode          *string                           `json:"sic_code,omitempty"`
}
