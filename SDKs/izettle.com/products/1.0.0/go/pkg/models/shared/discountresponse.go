package shared

import (
"time")

type DiscountResponse struct {
    Amount *Price `json:"amount,omitempty"`
    Created time.Time `json:"created"`
    Description *string `json:"description,omitempty"`
    Etag string `json:"etag"`
    ExternalReference *string `json:"externalReference,omitempty"`
    ImageLookupKeys []string `json:"imageLookupKeys,omitempty"`
    Name string `json:"name"`
    Percentage *float64 `json:"percentage,omitempty"`
    Updated time.Time `json:"updated"`
    UpdatedBy *string `json:"updatedBy,omitempty"`
    UUID string `json:"uuid"`
    
}

