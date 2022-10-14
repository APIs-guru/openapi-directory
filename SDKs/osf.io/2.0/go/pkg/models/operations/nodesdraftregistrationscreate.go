package operations

import (
	"time"
)

type NodesDraftRegistrationsCreatePathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

type NodesDraftRegistrationsCreateRequestBodyAttributesAttributes struct {
	DatetimeInitiated      time.Time `json:"datetime_initiated"`
	DatetimeUpdated        time.Time `json:"datetime_updated"`
	RegistrationMetadata   *string   `json:"registration_metadata,omitempty"`
	RegistrationSupplement string    `json:"registration_supplement"`
}

type NodesDraftRegistrationsCreateRequestBodyLinksLinks struct {
	HTML string `json:"html"`
}

type NodesDraftRegistrationsCreateRequestBodyRelationshipsRelationships struct {
	BranchedFrom       string `json:"branched_from"`
	Initiator          string `json:"initiator"`
	RegistrationSchema string `json:"registration_schema"`
}

type NodesDraftRegistrationsCreateRequestBodyDraftRegistration struct {
	Attributes    NodesDraftRegistrationsCreateRequestBodyAttributesAttributes       `json:"attributes"`
	ID            string                                                             `json:"id"`
	Links         NodesDraftRegistrationsCreateRequestBodyLinksLinks                 `json:"links"`
	Relationships NodesDraftRegistrationsCreateRequestBodyRelationshipsRelationships `json:"relationships"`
	Type          string                                                             `json:"type"`
}

type NodesDraftRegistrationsCreateRequest struct {
	PathParams NodesDraftRegistrationsCreatePathParams
	Request    NodesDraftRegistrationsCreateRequestBodyDraftRegistration `request:"mediaType=application/json"`
}

type NodesDraftRegistrationsCreateResponse struct {
	ContentType string
	StatusCode  int64
}
