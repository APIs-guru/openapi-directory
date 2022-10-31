package shared

import (
"time")

type CardResponse struct {
    Actions CardActions `json:"actions"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    Display CardDisplayBody `json:"display"`
    Fetch CardFetchBody `json:"fetch"`
    ID string `json:"id"`
    Title string `json:"title"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    
}

