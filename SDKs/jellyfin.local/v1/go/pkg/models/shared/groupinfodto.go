package shared

import (
"time")

type GroupInfoDto struct {
    GroupID *string `json:"GroupId,omitempty"`
    GroupName *string `json:"GroupName,omitempty"`
    LastUpdatedAt *time.Time `json:"LastUpdatedAt,omitempty"`
    Participants []string `json:"Participants,omitempty"`
    State *GroupStateTypeEnum `json:"State,omitempty"`
    
}

