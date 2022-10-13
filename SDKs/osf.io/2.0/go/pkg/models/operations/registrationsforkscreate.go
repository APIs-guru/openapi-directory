package operations

import (
	"time"
)

type RegistrationsForksCreatePathParams struct {
	RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
}

type RegistrationsForksCreateRequestBodyAttributesCategoryEnum string

const (
	RegistrationsForksCreateRequestBodyAttributesCategoryEnumAnalysis           RegistrationsForksCreateRequestBodyAttributesCategoryEnum = "analysis"
	RegistrationsForksCreateRequestBodyAttributesCategoryEnumCommunication      RegistrationsForksCreateRequestBodyAttributesCategoryEnum = "communication"
	RegistrationsForksCreateRequestBodyAttributesCategoryEnumData               RegistrationsForksCreateRequestBodyAttributesCategoryEnum = "data"
	RegistrationsForksCreateRequestBodyAttributesCategoryEnumHypothesis         RegistrationsForksCreateRequestBodyAttributesCategoryEnum = "hypothesis"
	RegistrationsForksCreateRequestBodyAttributesCategoryEnumInstrumentation    RegistrationsForksCreateRequestBodyAttributesCategoryEnum = "instrumentation"
	RegistrationsForksCreateRequestBodyAttributesCategoryEnumMethodsAndMeasures RegistrationsForksCreateRequestBodyAttributesCategoryEnum = "methods and measures"
	RegistrationsForksCreateRequestBodyAttributesCategoryEnumProcedure          RegistrationsForksCreateRequestBodyAttributesCategoryEnum = "procedure"
	RegistrationsForksCreateRequestBodyAttributesCategoryEnumProject            RegistrationsForksCreateRequestBodyAttributesCategoryEnum = "project"
	RegistrationsForksCreateRequestBodyAttributesCategoryEnumSoftware           RegistrationsForksCreateRequestBodyAttributesCategoryEnum = "software"
	RegistrationsForksCreateRequestBodyAttributesCategoryEnumOther              RegistrationsForksCreateRequestBodyAttributesCategoryEnum = "other"
)

type RegistrationsForksCreateRequestBodyAttributesAttributes struct {
	Category                    *RegistrationsForksCreateRequestBodyAttributesCategoryEnum `json:"category"`
	Collection                  *bool                                                      `json:"collection"`
	CurrentUserCanComment       *bool                                                      `json:"current_user_can_comment"`
	CurrentUserPermissions      []string                                                   `json:"current_user_permissions"`
	DateCreated                 *time.Time                                                 `json:"date_created"`
	DateModified                *time.Time                                                 `json:"date_modified"`
	DateRegistered              *time.Time                                                 `json:"date_registered"`
	DateWithdrawn               *time.Time                                                 `json:"date_withdrawn"`
	Description                 *string                                                    `json:"description"`
	EmbargoEndDate              *time.Time                                                 `json:"embargo_end_date"`
	Fork                        *bool                                                      `json:"fork"`
	NodeLicense                 *string                                                    `json:"node_license"`
	PendingEmbargoApproval      *bool                                                      `json:"pending_embargo_approval"`
	PendingRegistrationApproval *bool                                                      `json:"pending_registration_approval"`
	PendingWithdrawal           *bool                                                      `json:"pending_withdrawal"`
	Preprint                    *bool                                                      `json:"preprint"`
	Public                      *bool                                                      `json:"public"`
	RegisteredMeta              *string                                                    `json:"registered_meta"`
	Registration                *bool                                                      `json:"registration"`
	RegistrationSupplement      *string                                                    `json:"registration_supplement"`
	Tags                        []string                                                   `json:"tags"`
	TemplateFrom                *string                                                    `json:"template_from"`
	Title                       *string                                                    `json:"title"`
	WithdrawalJustification     *string                                                    `json:"withdrawal_justification"`
	Withdrawn                   *bool                                                      `json:"withdrawn"`
}

type RegistrationsForksCreateRequestBodyLinksLinks struct {
	HTML *string `json:"html"`
	Self *string `json:"self"`
}

type RegistrationsForksCreateRequestBodyRelationshipsRelationships struct {
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

type RegistrationsForksCreateRequestBodyRegistration struct {
	Attributes    RegistrationsForksCreateRequestBodyAttributesAttributes       `json:"attributes"`
	ID            string                                                        `json:"id"`
	Links         RegistrationsForksCreateRequestBodyLinksLinks                 `json:"links"`
	Relationships RegistrationsForksCreateRequestBodyRelationshipsRelationships `json:"relationships"`
	Type          string                                                        `json:"type"`
}

type RegistrationsForksCreateRequest struct {
	PathParams RegistrationsForksCreatePathParams
	Request    RegistrationsForksCreateRequestBodyRegistration `request:"mediaType=application/json"`
}

type RegistrationsForksCreateResponse struct {
	ContentType string
	StatusCode  int64
}
