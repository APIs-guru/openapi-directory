package operations

import (
	"time"
)

type NodesDraftRegistrationsCreatePathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesDraftRegistrationsCreateDraftRegistrationAttributes struct {
	DatetimeInitiated      time.Time `json:"datetime_initiated"`
	DatetimeUpdated        time.Time `json:"datetime_updated"`
	RegistrationMetadata   *string   `json:"registration_metadata,omitempty"`
	RegistrationSupplement string    `json:"registration_supplement"`
}

type NodesDraftRegistrationsCreateDraftRegistrationLinks struct {
	HTML string `json:"html"`
}

type NodesDraftRegistrationsCreateDraftRegistrationRelationships struct {
	BranchedFrom       string `json:"branched_from"`
	Initiator          string `json:"initiator"`
	RegistrationSchema string `json:"registration_schema"`
}

type NodesDraftRegistrationsCreateDraftRegistration struct {
	Attributes    NodesDraftRegistrationsCreateDraftRegistrationAttributes    `json:"attributes"`
	ID            string                                                      `json:"id"`
	Links         NodesDraftRegistrationsCreateDraftRegistrationLinks         `json:"links"`
	Relationships NodesDraftRegistrationsCreateDraftRegistrationRelationships `json:"relationships"`
	Type          string                                                      `json:"type"`
}

type NodesDraftRegistrationsCreateRequest struct {
	PathParams NodesDraftRegistrationsCreatePathParams
	Request    NodesDraftRegistrationsCreateDraftRegistration `request:"mediaType=application/json"`
}

type NodesDraftRegistrationsCreateResponse struct {
	ContentType string
	StatusCode  int64
}
