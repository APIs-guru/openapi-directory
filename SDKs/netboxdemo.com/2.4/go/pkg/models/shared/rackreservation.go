package shared

import (
"time")

type RackReservation struct {
    Created *time.Time `json:"created,omitempty"`
    Description string `json:"description"`
    ID *int64 `json:"id,omitempty"`
    Rack NestedRack `json:"rack"`
    Tenant *NestedTenant `json:"tenant,omitempty"`
    Units []int64 `json:"units"`
    User NestedUser `json:"user"`
    
}

