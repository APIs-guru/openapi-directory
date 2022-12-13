package shared

import (
	"time"
)

type GroupCreateRequestBusinessDetailsEmployerTypeEnum string

const (
	GroupCreateRequestBusinessDetailsEmployerTypeEnumForeignGovernment GroupCreateRequestBusinessDetailsEmployerTypeEnum = "foreign_government"
	GroupCreateRequestBusinessDetailsEmployerTypeEnumPrivateSector     GroupCreateRequestBusinessDetailsEmployerTypeEnum = "private_sector"
	GroupCreateRequestBusinessDetailsEmployerTypeEnumReligiousEmployer GroupCreateRequestBusinessDetailsEmployerTypeEnum = "religious_employer"
	GroupCreateRequestBusinessDetailsEmployerTypeEnumStateGovernment   GroupCreateRequestBusinessDetailsEmployerTypeEnum = "state_government"
	GroupCreateRequestBusinessDetailsEmployerTypeEnumTribalGovernment  GroupCreateRequestBusinessDetailsEmployerTypeEnum = "tribal_government"
)

type GroupCreateRequestBusinessDetailsEntityTypeEnum string

const (
	GroupCreateRequestBusinessDetailsEntityTypeEnumCCorp       GroupCreateRequestBusinessDetailsEntityTypeEnum = "c_corp"
	GroupCreateRequestBusinessDetailsEntityTypeEnumLlc         GroupCreateRequestBusinessDetailsEntityTypeEnum = "llc"
	GroupCreateRequestBusinessDetailsEntityTypeEnumLlp         GroupCreateRequestBusinessDetailsEntityTypeEnum = "llp"
	GroupCreateRequestBusinessDetailsEntityTypeEnumPartnership GroupCreateRequestBusinessDetailsEntityTypeEnum = "partnership"
	GroupCreateRequestBusinessDetailsEntityTypeEnumSCorp       GroupCreateRequestBusinessDetailsEntityTypeEnum = "s_corp"
)

// GroupCreateRequestBusinessDetails
// Details about business or industry of the group
type GroupCreateRequestBusinessDetails struct {
	CompanyDescription *string                                            `json:"company_description,omitempty"`
	DateEstablished    *time.Time                                         `json:"date_established,omitempty"`
	EmployerType       *GroupCreateRequestBusinessDetailsEmployerTypeEnum `json:"employer_type,omitempty"`
	EntityType         *GroupCreateRequestBusinessDetailsEntityTypeEnum   `json:"entity_type,omitempty"`
}

// GroupCreateRequestInsuranceDetails
// General details about the group insurance offerings
type GroupCreateRequestInsuranceDetails struct {
	IsErisaCompliant *bool `json:"is_erisa_compliant,omitempty"`
	IsErisaSubject   *bool `json:"is_erisa_subject,omitempty"`
}

type GroupCreateRequest struct {
	BusinessDetails  *GroupCreateRequestBusinessDetails  `json:"business_details,omitempty"`
	DbaName          *string                             `json:"dba_name,omitempty"`
	FederalEin       *string                             `json:"federal_ein,omitempty"`
	InsuranceDetails *GroupCreateRequestInsuranceDetails `json:"insurance_details,omitempty"`
	Name             string                              `json:"name"`
	OrganizationID   *string                             `json:"organization_id,omitempty"`
	SicCode          *string                             `json:"sic_code,omitempty"`
}
