package shared

import (
"time")

type CourseMetaResponse struct {
    CoverImageURL *string `json:"coverImageUrl,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    ID *string `json:"id,omitempty"`
    Metadata *interface{} `json:"metadata,omitempty"`
    Name *string `json:"name,omitempty"`
    TasksEnabled *bool `json:"tasksEnabled,omitempty"`
    
}

