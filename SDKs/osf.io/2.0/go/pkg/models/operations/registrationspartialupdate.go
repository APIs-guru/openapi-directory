package operations

import (
	"time"
)

type RegistrationsPartialUpdatePathParams struct {
	RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
}

type RegistrationsPartialUpdateRequestBodyAttributesCategoryEnum string

const (
	RegistrationsPartialUpdateRequestBodyAttributesCategoryEnumAnalysis           RegistrationsPartialUpdateRequestBodyAttributesCategoryEnum = "analysis"
	RegistrationsPartialUpdateRequestBodyAttributesCategoryEnumCommunication      RegistrationsPartialUpdateRequestBodyAttributesCategoryEnum = "communication"
	RegistrationsPartialUpdateRequestBodyAttributesCategoryEnumData               RegistrationsPartialUpdateRequestBodyAttributesCategoryEnum = "data"
	RegistrationsPartialUpdateRequestBodyAttributesCategoryEnumHypothesis         RegistrationsPartialUpdateRequestBodyAttributesCategoryEnum = "hypothesis"
	RegistrationsPartialUpdateRequestBodyAttributesCategoryEnumInstrumentation    RegistrationsPartialUpdateRequestBodyAttributesCategoryEnum = "instrumentation"
	RegistrationsPartialUpdateRequestBodyAttributesCategoryEnumMethodsAndMeasures RegistrationsPartialUpdateRequestBodyAttributesCategoryEnum = "methods and measures"
	RegistrationsPartialUpdateRequestBodyAttributesCategoryEnumProcedure          RegistrationsPartialUpdateRequestBodyAttributesCategoryEnum = "procedure"
	RegistrationsPartialUpdateRequestBodyAttributesCategoryEnumProject            RegistrationsPartialUpdateRequestBodyAttributesCategoryEnum = "project"
	RegistrationsPartialUpdateRequestBodyAttributesCategoryEnumSoftware           RegistrationsPartialUpdateRequestBodyAttributesCategoryEnum = "software"
	RegistrationsPartialUpdateRequestBodyAttributesCategoryEnumOther              RegistrationsPartialUpdateRequestBodyAttributesCategoryEnum = "other"
)

type RegistrationsPartialUpdateRequestBodyAttributesAttributes struct {
	Category                    *RegistrationsPartialUpdateRequestBodyAttributesCategoryEnum `json:"category"`
	Collection                  *bool                                                        `json:"collection"`
	CurrentUserCanComment       *bool                                                        `json:"current_user_can_comment"`
	CurrentUserPermissions      []string                                                     `json:"current_user_permissions"`
	DateCreated                 *time.Time                                                   `json:"date_created"`
	DateModified                *time.Time                                                   `json:"date_modified"`
	DateRegistered              *time.Time                                                   `json:"date_registered"`
	DateWithdrawn               *time.Time                                                   `json:"date_withdrawn"`
	Description                 *string                                                      `json:"description"`
	EmbargoEndDate              *time.Time                                                   `json:"embargo_end_date"`
	Fork                        *bool                                                        `json:"fork"`
	NodeLicense                 *string                                                      `json:"node_license"`
	PendingEmbargoApproval      *bool                                                        `json:"pending_embargo_approval"`
	PendingRegistrationApproval *bool                                                        `json:"pending_registration_approval"`
	PendingWithdrawal           *bool                                                        `json:"pending_withdrawal"`
	Preprint                    *bool                                                        `json:"preprint"`
	Public                      *bool                                                        `json:"public"`
	RegisteredMeta              *string                                                      `json:"registered_meta"`
	Registration                *bool                                                        `json:"registration"`
	RegistrationSupplement      *string                                                      `json:"registration_supplement"`
	Tags                        []string                                                     `json:"tags"`
	TemplateFrom                *string                                                      `json:"template_from"`
	Title                       *string                                                      `json:"title"`
	WithdrawalJustification     *string                                                      `json:"withdrawal_justification"`
	Withdrawn                   *bool                                                        `json:"withdrawn"`
}

type RegistrationsPartialUpdateRequestBodyLinksLinks struct {
	HTML *string `json:"html"`
	Self *string `json:"self"`
}

type RegistrationsPartialUpdateRequestBodyRelationshipsRelationships struct {
	AffiliatedInstitutions *string `json:"affiliated_institutions"`
	Children               *string `json:"children"`
	Citation               *string `json:"citation"`
	Comments               *string `json:"comments"`
	Contributors           *string `json:"contributors"`
	Files                  *string `json:"files"`
	Forks                  *string `json:"forks"`
	Identifiers            *string `json:"identifiers"`
	LinkedNodes            *string `json:"linked_nodes"`
	Logs                   *string `json:"logs"`
	NodeLinks              *string `json:"node_links"`
	Parent                 *string `json:"parent"`
	RegisteredBy           *string `json:"registered_by"`
	RegisteredFrom         *string `json:"registered_from"`
	RegistrationSchema     *string `json:"registration_schema"`
	Root                   *string `json:"root"`
	ViewOnlyLinks          *string `json:"view_only_links"`
	Wikis                  *string `json:"wikis"`
}

type RegistrationsPartialUpdateRequestBodyRegistration struct {
	Attributes    RegistrationsPartialUpdateRequestBodyAttributesAttributes       `json:"attributes"`
	ID            string                                                          `json:"id"`
	Links         RegistrationsPartialUpdateRequestBodyLinksLinks                 `json:"links"`
	Relationships RegistrationsPartialUpdateRequestBodyRelationshipsRelationships `json:"relationships"`
	Type          string                                                          `json:"type"`
}

type RegistrationsPartialUpdateRequest struct {
	PathParams RegistrationsPartialUpdatePathParams
	Request    RegistrationsPartialUpdateRequestBodyRegistration `request:"mediaType=application/json"`
}

type RegistrationsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
