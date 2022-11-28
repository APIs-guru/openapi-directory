package operations

type NodesDraftRegistrationsPartialUpdatePathParams struct {
	DraftID string `pathParam:"style=simple,explode=false,name=draft_id"`
	NodeID  string `pathParam:"style=simple,explode=false,name=node_id"`
}

// NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput
// The properties of the draft registration entity.
type NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput struct {
	RegistrationMetadata   *string `json:"registration_metadata,omitempty"`
	RegistrationSupplement string  `json:"registration_supplement"`
}

type NodesDraftRegistrationsPartialUpdateDraftRegistrationInput struct {
	Attributes NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributesInput `json:"attributes"`
}

type NodesDraftRegistrationsPartialUpdateRequest struct {
	PathParams NodesDraftRegistrationsPartialUpdatePathParams
	Request    NodesDraftRegistrationsPartialUpdateDraftRegistrationInput `request:"mediaType=application/json"`
}

type NodesDraftRegistrationsPartialUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
