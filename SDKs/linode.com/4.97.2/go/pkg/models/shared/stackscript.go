package shared

import (
"time")

type StackScript struct {
    Created *time.Time `json:"created,omitempty"`
    DeploymentsActive *int64 `json:"deployments_active,omitempty"`
    DeploymentsTotal *int64 `json:"deployments_total,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Images []string `json:"images,omitempty"`
    IsPublic *bool `json:"is_public,omitempty"`
    Label *string `json:"label,omitempty"`
    Mine *bool `json:"mine,omitempty"`
    RevNote *string `json:"rev_note,omitempty"`
    Script *string `json:"script,omitempty"`
    Updated *time.Time `json:"updated,omitempty"`
    UserDefinedFields []UserDefinedField `json:"user_defined_fields,omitempty"`
    UserGravatarID *string `json:"user_gravatar_id,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

