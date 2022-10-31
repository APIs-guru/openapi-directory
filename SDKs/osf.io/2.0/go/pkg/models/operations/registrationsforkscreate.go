package operations

import (
	"time"
)

type RegistrationsForksCreatePathParams struct {
	RegistrationID string `pathParam:"style=simple,explode=false,name=registration_id"`
}

type RegistrationsForksCreateRegistrationAttributesCategoryEnum string

const (
	RegistrationsForksCreateRegistrationAttributesCategoryEnumAnalysis           RegistrationsForksCreateRegistrationAttributesCategoryEnum = "analysis"
	RegistrationsForksCreateRegistrationAttributesCategoryEnumCommunication      RegistrationsForksCreateRegistrationAttributesCategoryEnum = "communication"
	RegistrationsForksCreateRegistrationAttributesCategoryEnumData               RegistrationsForksCreateRegistrationAttributesCategoryEnum = "data"
	RegistrationsForksCreateRegistrationAttributesCategoryEnumHypothesis         RegistrationsForksCreateRegistrationAttributesCategoryEnum = "hypothesis"
	RegistrationsForksCreateRegistrationAttributesCategoryEnumInstrumentation    RegistrationsForksCreateRegistrationAttributesCategoryEnum = "instrumentation"
	RegistrationsForksCreateRegistrationAttributesCategoryEnumMethodsAndMeasures RegistrationsForksCreateRegistrationAttributesCategoryEnum = "methods and measures"
	RegistrationsForksCreateRegistrationAttributesCategoryEnumProcedure          RegistrationsForksCreateRegistrationAttributesCategoryEnum = "procedure"
	RegistrationsForksCreateRegistrationAttributesCategoryEnumProject            RegistrationsForksCreateRegistrationAttributesCategoryEnum = "project"
	RegistrationsForksCreateRegistrationAttributesCategoryEnumSoftware           RegistrationsForksCreateRegistrationAttributesCategoryEnum = "software"
	RegistrationsForksCreateRegistrationAttributesCategoryEnumOther              RegistrationsForksCreateRegistrationAttributesCategoryEnum = "other"
)

type RegistrationsForksCreateRegistrationAttributes struct {
	Category                    *RegistrationsForksCreateRegistrationAttributesCategoryEnum `json:"category,omitempty"`
	Collection                  *bool                                                       `json:"collection,omitempty"`
	CurrentUserCanComment       *bool                                                       `json:"current_user_can_comment,omitempty"`
	CurrentUserPermissions      []string                                                    `json:"current_user_permissions,omitempty"`
	DateCreated                 *time.Time                                                  `json:"date_created,omitempty"`
	DateModified                *time.Time                                                  `json:"date_modified,omitempty"`
	DateRegistered              *time.Time                                                  `json:"date_registered,omitempty"`
	DateWithdrawn               *time.Time                                                  `json:"date_withdrawn,omitempty"`
	Description                 *string                                                     `json:"description,omitempty"`
	EmbargoEndDate              *time.Time                                                  `json:"embargo_end_date,omitempty"`
	Fork                        *bool                                                       `json:"fork,omitempty"`
	NodeLicense                 *string                                                     `json:"node_license,omitempty"`
	PendingEmbargoApproval      *bool                                                       `json:"pending_embargo_approval,omitempty"`
	PendingRegistrationApproval *bool                                                       `json:"pending_registration_approval,omitempty"`
	PendingWithdrawal           *bool                                                       `json:"pending_withdrawal,omitempty"`
	Preprint                    *bool                                                       `json:"preprint,omitempty"`
	Public                      *bool                                                       `json:"public,omitempty"`
	RegisteredMeta              *string                                                     `json:"registered_meta,omitempty"`
	Registration                *bool                                                       `json:"registration,omitempty"`
	RegistrationSupplement      *string                                                     `json:"registration_supplement,omitempty"`
	Tags                        []string                                                    `json:"tags,omitempty"`
	TemplateFrom                *string                                                     `json:"template_from,omitempty"`
	Title                       *string                                                     `json:"title,omitempty"`
	WithdrawalJustification     *string                                                     `json:"withdrawal_justification,omitempty"`
	Withdrawn                   *bool                                                       `json:"withdrawn,omitempty"`
}

type RegistrationsForksCreateRegistrationLinks struct {
	HTML *string `json:"html,omitempty"`
	Self *string `json:"self,omitempty"`
}

type RegistrationsForksCreateRegistrationRelationships struct {
	AffiliatedInstitutions *string `json:"affiliated_institutions,omitempty"`
	Children               *string `json:"children,omitempty"`
	Citation               *string `json:"citation,omitempty"`
	Comments               *string `json:"comments,omitempty"`
	Contributors           *string `json:"contributors,omitempty"`
	Files                  *string `json:"files,omitempty"`
	Forks                  *string `json:"forks,omitempty"`
	Identifiers            *string `json:"identifiers,omitempty"`
	LinkedNodes            *string `json:"linked_nodes,omitempty"`
	Logs                   *string `json:"logs,omitempty"`
	NodeLinks              *string `json:"node_links,omitempty"`
	Parent                 *string `json:"parent,omitempty"`
	RegisteredBy           *string `json:"registered_by,omitempty"`
	RegisteredFrom         *string `json:"registered_from,omitempty"`
	RegistrationSchema     *string `json:"registration_schema,omitempty"`
	Root                   *string `json:"root,omitempty"`
	ViewOnlyLinks          *string `json:"view_only_links,omitempty"`
	Wikis                  *string `json:"wikis,omitempty"`
}

type RegistrationsForksCreateRegistration struct {
	Attributes    RegistrationsForksCreateRegistrationAttributes    `json:"attributes"`
	ID            string                                            `json:"id"`
	Links         RegistrationsForksCreateRegistrationLinks         `json:"links"`
	Relationships RegistrationsForksCreateRegistrationRelationships `json:"relationships"`
	Type          string                                            `json:"type"`
}

type RegistrationsForksCreateRequest struct {
	PathParams RegistrationsForksCreatePathParams
	Request    RegistrationsForksCreateRegistration `request:"mediaType=application/json"`
}

type RegistrationsForksCreateResponse struct {
	ContentType string
	StatusCode  int64
}
