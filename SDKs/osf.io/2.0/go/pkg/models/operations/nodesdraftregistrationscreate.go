package operations

type NodesDraftRegistrationsCreatePathParams struct {
	NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
}

// NodesDraftRegistrationsCreateDraftRegistrationAttributesInput
// The properties of the draft registration entity.
type NodesDraftRegistrationsCreateDraftRegistrationAttributesInput struct {
	RegistrationMetadata   *string `json:"registration_metadata,omitempty"`
	RegistrationSupplement string  `json:"registration_supplement"`
}

type NodesDraftRegistrationsCreateDraftRegistrationInput struct {
	Attributes NodesDraftRegistrationsCreateDraftRegistrationAttributesInput `json:"attributes"`
}

type NodesDraftRegistrationsCreateRequest struct {
	PathParams NodesDraftRegistrationsCreatePathParams
	Request    NodesDraftRegistrationsCreateDraftRegistrationInput `request:"mediaType=application/json"`
}

type NodesDraftRegistrationsCreateResponse struct {
	ContentType string
	StatusCode  int64
}
