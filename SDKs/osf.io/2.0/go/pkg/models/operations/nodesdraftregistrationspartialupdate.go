package operations

import (
"time")

type NodesDraftRegistrationsPartialUpdatePathParams struct {
    DraftID string `pathParam:"style=simple,explode=false,name=draft_id"`
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributes struct {
    DatetimeInitiated time.Time `json:"datetime_initiated"`
    DatetimeUpdated time.Time `json:"datetime_updated"`
    RegistrationMetadata *string `json:"registration_metadata,omitempty"`
    RegistrationSupplement string `json:"registration_supplement"`
    
}

type NodesDraftRegistrationsPartialUpdateDraftRegistrationLinks struct {
    HTML string `json:"html"`
    
}

type NodesDraftRegistrationsPartialUpdateDraftRegistrationRelationships struct {
    BranchedFrom string `json:"branched_from"`
    Initiator string `json:"initiator"`
    RegistrationSchema string `json:"registration_schema"`
    
}

type NodesDraftRegistrationsPartialUpdateDraftRegistration struct {
    Attributes NodesDraftRegistrationsPartialUpdateDraftRegistrationAttributes `json:"attributes"`
    ID string `json:"id"`
    Links NodesDraftRegistrationsPartialUpdateDraftRegistrationLinks `json:"links"`
    Relationships NodesDraftRegistrationsPartialUpdateDraftRegistrationRelationships `json:"relationships"`
    Type string `json:"type"`
    
}

type NodesDraftRegistrationsPartialUpdateRequest struct {
    PathParams NodesDraftRegistrationsPartialUpdatePathParams 
    Request NodesDraftRegistrationsPartialUpdateDraftRegistration `request:"mediaType=application/json"`
    
}

type NodesDraftRegistrationsPartialUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

