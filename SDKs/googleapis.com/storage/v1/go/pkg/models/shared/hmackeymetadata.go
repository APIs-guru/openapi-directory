package shared

import (
"time")

type HmacKeyMetadata struct {
    AccessID *string `json:"accessId,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    ServiceAccountEmail *string `json:"serviceAccountEmail,omitempty"`
    State *string `json:"state,omitempty"`
    TimeCreated *time.Time `json:"timeCreated,omitempty"`
    Updated *time.Time `json:"updated,omitempty"`
    
}

